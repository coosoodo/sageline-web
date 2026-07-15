export interface BoardCategory {
  id: string;
  title: string;
  shortName: string;
  description: string;
  icon: string;
}

// 게시판 카테고리 단일 소스 (레이아웃 사이드바 · 헤더 · 라우트 검증 공용)
export const BOARD_CATEGORIES: BoardCategory[] = [
  { id: 'free', shortName: '자유게시판', title: '자유게시판', description: '자유롭게 소통하고 이야기를 나누는 공간입니다.', icon: '💬' },
  { id: 'qa', shortName: 'Q&A', title: 'Q&A 게시판', description: '궁금한 점을 자유롭게 질문하고 답변을 받아보세요.', icon: '❓' },
  { id: 'resources', shortName: '자료실', title: '자료실', description: '필요한 프로그램이나 문서를 공유하는 공간입니다.', icon: '📂' },
  { id: 'suggestions', shortName: '개선제안', title: '개선제안', description: 'SAGE LINE의 발전을 위한 소중한 의견을 들려주세요.', icon: '💡' },
  { id: 'bugs', shortName: '버그신고', title: '버그신고', description: '서비스 이용 중 발생한 불편한 점을 제보해 주세요.', icon: '🐛' },
];

export const BOARD_CATEGORY_IDS = BOARD_CATEGORIES.map((c) => c.id);

// 전체글: 모든 카테고리를 한 곳에서 모아 보는 가상 카테고리
export const ALL_BOARD: BoardCategory = {
  id: 'all',
  shortName: '전체글',
  title: '전체글',
  description: '모든 게시판의 글을 한 곳에서 모아 봅니다.',
  icon: '🗂️',
};

// 사이드바 표시용: 전체글 + 실제 카테고리
export const BOARDS_WITH_ALL: BoardCategory[] = [ALL_BOARD, ...BOARD_CATEGORIES];

export const getBoardCategory = (id: string): BoardCategory | undefined =>
  BOARD_CATEGORIES.find((c) => c.id === id);

// 전체글(all)을 포함한 조회 — 헤더 등 표시용.
// (글쓰기·라우트 검증에는 실제 카테고리만 있는 BOARD_CATEGORY_IDS 를 사용)
export const getBoardView = (id: string): BoardCategory | undefined =>
  id === ALL_BOARD.id ? ALL_BOARD : getBoardCategory(id);
