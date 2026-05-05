'use client';

import React from 'react';
import { Editor } from '@tiptap/react';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Undo, 
  Redo, 
  Code, 
  Image as ImageIcon,
  Link as LinkIcon,
  Heading1,
  Heading2,
  Heading3,
  Pipette
} from 'lucide-react';

interface EditorToolbarProps {
  editor: Editor | null;
  onImageUpload: () => void;
}

export default function EditorToolbar({ editor, onImageUpload }: EditorToolbarProps) {
  if (!editor) {
    return null;
  }

  const addLink = () => {
    const url = window.prompt('URL을 입력하세요:');
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-200 bg-slate-50/50 rounded-t-2xl">
      <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('bold') ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="굵게"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('italic') ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="기울임"
        >
          <Italic size={18} />
        </button>
      </div>

      <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('heading', { level: 1 }) ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="제목 1"
        >
          <Heading1 size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('heading', { level: 2 }) ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="제목 2"
        >
          <Heading2 size={18} />
        </button>
      </div>

      <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('bulletList') ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="글머리 기호"
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('orderedList') ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="번호 매기기"
        >
          <ListOrdered size={18} />
        </button>
      </div>

      <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('blockquote') ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="인용구"
        >
          <Quote size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded-lg transition-all ${editor.isActive('codeBlock') ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="코드 블록"
        >
          <Code size={18} />
        </button>
      </div>

      <div className="flex items-center gap-1 border-r border-slate-200 pr-2 mr-1">
        <button
          type="button"
          onClick={addLink}
          className={`p-2 rounded-lg transition-all ${editor.isActive('link') ? 'bg-emerald-100 text-emerald-600' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`}
          title="링크"
        >
          <LinkIcon size={18} />
        </button>
        <button
          type="button"
          onClick={onImageUpload}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all"
          title="이미지 업로드"
        >
          <ImageIcon size={18} />
        </button>
      </div>
      
      <div className="flex items-center gap-2 border-r border-slate-200 pr-2 mr-1">
        <div className="relative flex items-center gap-1">
          <Pipette size={18} className="text-slate-500" />
          <input
            type="color"
            onInput={(e) => editor.chain().focus().setColor((e.target as HTMLInputElement).value).run()}
            value={editor.getAttributes('textStyle').color || '#0f172a'}
            className="w-6 h-6 p-0 border-0 bg-transparent cursor-pointer rounded overflow-hidden"
            title="글자 색상"
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 transition-all"
          title="되돌리기"
        >
          <Undo size={18} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 transition-all"
          title="다시 실행"
        >
          <Redo size={18} />
        </button>
      </div>
    </div>
  );
}
