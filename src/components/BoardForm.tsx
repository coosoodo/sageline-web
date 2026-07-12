'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase-browser';
import TurndownService from 'turndown';
// @ts-ignore
import { gfm } from 'turndown-plugin-gfm';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { Link } from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { FontFamily } from '@tiptap/extension-font-family';
import { marked } from 'marked';
import { DOMParser as ProseMirrorDOMParser } from '@tiptap/pm/model';
import EditorToolbar from './EditorToolbar';

interface BoardFormProps {
  category: string;
  initialData?: {
    id?: string;
    title: string;
    content: string;
    is_announcement: boolean;
  };
  isEdit?: boolean;
}

export default function BoardForm({ category, initialData, isEdit = false }: BoardFormProps) {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();
  const [title, setTitle] = useState(initialData?.title || '');
  const [isAnnouncement, setIsAnnouncement] = useState(initialData?.is_announcement || false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 초기 마크다운을 HTML로 변환
  const initialHtml = initialData?.content ? marked.parse(initialData.content) : '';

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase]);

  const uploadImage = useCallback(async (file: File | Blob): Promise<string> => {
    const fileExt = (file instanceof File) ? (file.name.split('.').pop() || 'png') : (file.type.split('/')[1] || 'png');
    const fileName = `${Math.random().toString(36).slice(2, 11)}_${Date.now()}.${fileExt}`;
    const filePath = `${category}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('posts')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('posts')
      .getPublicUrl(filePath);

    return publicUrl;
  }, [category, supabase]);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: {
          openOnClick: false,
          HTMLAttributes: {
            class: 'text-teal-600 underline decoration-teal-500/30 underline-offset-4 hover:text-teal-700 transition-colors',
          },
        },
      }),
      TextStyle,
      Color.configure({
        types: ['textStyle'],
      }),
      FontFamily,
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: 'rounded-xl max-w-full h-auto my-4 shadow-lg',
        },
      }),
      Placeholder.configure({
        placeholder: '내용을 입력하세요. 이미지는 Ctrl+V로 붙여넣을 수 있습니다.',
      }),
    ],
    content: initialHtml,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose max-w-none min-h-[400px] px-6 py-4 focus:outline-none focus:ring-0',
      },
      handlePaste: (view, event) => {
        const items = Array.from(event.clipboardData?.items || []);
        const html = event.clipboardData?.getData('text/html');
        const text = event.clipboardData?.getData('text/plain');

        // 1. 순수 이미지 파일만 있는 경우 (캡처 도구 등)
        const imageFiles = items.filter(item => item.type.startsWith('image/'));
        if (imageFiles.length > 0 && !html && !text) {
          imageFiles.forEach(async (item) => {
            const file = item.getAsFile();
            if (file) {
              try {
                const url = await uploadImage(file);
                if (view.state) {
                  const node = view.state.schema.nodes.image.create({ src: url });
                  const tr = view.state.tr.replaceSelectionWith(node);
                  view.dispatch(tr);
                }
              } catch (err: any) {
                alert('이미지 업로드 실패: ' + err.message);
              }
            }
          });
          return true;
        }

        // 2. HTML 내용이 있는 경우 (웹사이트 복사 등)
        if (html) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const images = Array.from(doc.querySelectorAll('img'));
          
          if (images.length > 0) {
            // 모든 이미지를 업로드 대상으로 함 (이미 우리 서버 URL인 경우 제외)
            const uploadPromises = images.map(async (img) => {
              const src = img.getAttribute('src');
              // base64 이거나 외부 URL인 경우 업로드 시도
              if (src && !src.includes(process.env.NEXT_PUBLIC_SUPABASE_URL || '')) {
                try {
                  // 1. 직접 fetch 시도
                  let res = await fetch(src).catch(() => null);
                  
                  // 2. 실패 시(CORS 등) 프록시 서버를 통해 시도
                  if (!res || !res.ok) {
                    const proxyUrl = `/api/proxy-image?url=${encodeURIComponent(src)}`;
                    res = await fetch(proxyUrl);
                  }

                  if (res && res.ok) {
                    const blob = await res.blob();
                    const url = await uploadImage(blob);
                    img.setAttribute('src', url);
                  }
                } catch (err) {
                  console.warn('Could not upload external image even with proxy:', err);
                  // 최종 실패 시 원본 URL 유지
                }
              }
            });

            Promise.all(uploadPromises).finally(() => {
              if (view.state) {
                const { schema } = view.state;
                const pmParser = ProseMirrorDOMParser.fromSchema(schema);
                const slice = pmParser.parseSlice(doc.body);
                const transaction = view.state.tr.replaceSelection(slice);
                view.dispatch(transaction);
              }
            });
            return true;
          }
        }

        return false;
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('로그인이 필요합니다.');
      return;
    }

    if (!editor) return;

    setIsLoading(true);

    try {
      const turndownService = new TurndownService({
        headingStyle: 'atx',
        codeBlockStyle: 'fenced',
        emDelimiter: '_',
        strongDelimiter: '**'
      });
      turndownService.use(gfm);
      
      // span 태그의 style(색상, 글꼴 등) 속성 보존
      turndownService.addRule('preserve-styles', {
        filter: ['span'],
        replacement: (content, node) => {
          const style = (node as any).getAttribute?.('style');
          return style ? `<span style="${style}">${content}</span>` : content;
        }
      });

      // Tiptap의 HTML을 마크다운으로 변환
      const htmlContent = editor.getHTML();
      const markdown = turndownService.turndown(htmlContent);

      if (isEdit && initialData?.id) {
        const { error } = await supabase
          .from('posts')
          .update({
            title,
            content: markdown,
            is_announcement: isAnnouncement,
            updated_at: new Date().toISOString(),
          })
          .eq('id', initialData.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('posts').insert({
          title,
          content: markdown,
          category,
          is_announcement: isAnnouncement,
          author_id: user.id,
          author_name: user.email?.split('@')[0],
        });

        if (error) throw error;
      }

      router.push(`/boards/${category}`);
      router.refresh();
    } catch (error: any) {
      alert('저장 중 오류가 발생했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToolbarImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && editor) {
      try {
        setIsLoading(true);
        const url = await uploadImage(file);
        editor.chain().focus().setImage({ src: url }).run();
      } catch (err: any) {
        alert('이미지 업로드 실패: ' + err.message);
      } finally {
        setIsLoading(false);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">제목</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="제목을 입력하세요"
          className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:border-teal-500/50 focus:outline-none transition-all shadow-sm"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 ml-1">
          내용 (이미지를 붙여넣어 즉시 확인할 수 있습니다)
        </label>
        <div className="w-full rounded-2xl border border-slate-200 bg-white overflow-hidden focus-within:border-teal-500/50 transition-all shadow-sm">
          <EditorToolbar editor={editor} onImageUpload={handleToolbarImageUpload} />
          <EditorContent editor={editor} />
        </div>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileChange} 
          accept="image/*" 
          className="hidden" 
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <input
            id="is_announcement"
            type="checkbox"
            checked={isAnnouncement}
            onChange={(e) => setIsAnnouncement(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 bg-white text-teal-600 focus:ring-teal-500/20"
          />
          <label htmlFor="is_announcement" className="text-sm text-slate-500 font-light">공지사항으로 등록</label>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-8 py-3 rounded-full border border-slate-200 text-xs font-black uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-all"
          >
            취소
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 rounded-full bg-teal-500 text-xs font-black uppercase tracking-[0.2em] text-white hover:bg-teal-400 disabled:opacity-50 transition-all shadow-lg shadow-teal-500/20"
          >
            {isLoading ? '저장 중...' : (isEdit ? '수정하기' : '등록하기')}
          </button>
        </div>
      </div>
    </form>
  );
}
