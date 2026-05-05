const fs = require('fs');
const path = require('path');

const mdPath = 'c:/Source/my-simple-next/src/manual.md';
const content = fs.readFileSync(mdPath, 'utf8');
const lines = content.split('\n');

const referenceToc = [
  { level: 1, number: "1", title: "시작하기 전에" },
  { level: 2, number: "1.1", title: "이 문서에 대하여" },
  { level: 2, number: "1.2", title: "부엉이 ATS 란?" },
  { level: 2, number: "1.3", title: "주요 기능 한눈에 보기" },
  { level: 2, number: "1.4", title: "화면 구성 미리보기" },
  { level: 1, number: "2", title: "설치 및 초기 설정" },
  { level: 2, number: "2.1", title: "시스템 요구 사항" },
  { level: 1, number: "3", title: "로그인" },
  { level: 2, number: "3.1", title: "로그인 화면 안내" },
  { level: 1, number: "4", title: "메인 화면 안내" },
  { level: 2, number: "4.1", title: "메인 화면 전체 구성" },
  { level: 2, number: "4.2", title: "메뉴 및 탭 설명" },
  { level: 2, number: "4.3", title: "상태 표시 영역 읽는 방법" },
  { level: 2, number: "4.4", title: "테마 변경 방법" },
  { level: 1, number: "5", title: "자동 매매 전략 설정" },
  { level: 2, number: "5.1", title: "자동 매매 전략이란?" },
  { level: 2, number: "5.2", title: "매매 전략 목록 확인 방법" },
  { level: 2, number: "5.4", title: "매매 전략 수정 및 삭제" },
  { level: 2, number: "5.5", title: "전략 가져오기 / 내보내기" },
  { level: 1, number: "6", title: "자동 매매 실행 및 모니터링" },
  { level: 2, number: "6.1", title: "자동 매매 시작하기" },
  { level: 2, number: "6.2", title: "자동 매매 스위치 대시보드" },
  { level: 2, number: "6.3", title: "자동 매매 현황 모니터링" },
  { level: 2, number: "6.4", title: "자동 매매 중지 방법" },
  { level: 2, number: "6.5", title: "자동 매매 이력 조회" },
  { level: 1, number: "7", title: "스케줄러" },
  { level: 2, number: "7.1", title: "스케줄러 화면 안내" },
  { level: 2, number: "7.2", title: "자동 시작 스케줄 설정 방법" },
  { level: 2, number: "7.3", title: "자동 종료 스케줄 설정 방법" },
  { level: 2, number: "7.4", title: "설정한 스케줄 확인 및 수정" },
  { level: 1, number: "8", title: "로그 확인" },
  { level: 2, number: "8.1", title: "로그 대시보드 화면 안내" },
  { level: 2, number: "8.2", title: "실시간 로그 보는 방법" },
  { level: 2, number: "8.3", title: "로그 매니저에서 과거 로그 조회" },
  { level: 2, number: "8.4", title: "로그 파일 업로드 방법" }
];

let bodyStartIndex = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('8.4 로그 파일 업로드 방법')) {
        bodyStartIndex = i + 1;
        break;
    }
}

const newLines = [...lines.slice(0, bodyStartIndex)];
const bodyLines = lines.slice(bodyStartIndex);

for (let i = 0; i < bodyLines.length; i++) {
    let line = bodyLines[i].trim();
    if (line === '') {
        newLines.push(bodyLines[i]);
        continue;
    }

    let found = false;
    for (const item of referenceToc) {
        // More flexible regex to match titles even if they have different numbering
        // Match: optional numbers/dots, then the title
        const escapedTitle = item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`^([\\d\\.\\s\\\\\\*]+)*${escapedTitle}\\s*$`);
        
        if (line.match(regex)) {
            const hashes = '#'.repeat(item.level);
            newLines.push(`${hashes} ${item.number}. ${item.title}`);
            found = true;
            break;
        }
    }

    if (!found) {
        newLines.push(bodyLines[i]);
    }
}

// Inject missing top-level headers
let finalLines = [];
let injected = new Set();

for (let i = 0; i < newLines.length; i++) {
    const line = newLines[i];
    if (i >= bodyStartIndex) {
        if (line.startsWith('## 1.1') && !injected.has(1)) {
            finalLines.push('# 1. 시작하기 전에');
            finalLines.push('');
            injected.add(1);
        }
        if (line.startsWith('## 2.1') && !injected.has(2)) {
            finalLines.push('# 2. 설치 및 초기 설정');
            finalLines.push('');
            injected.add(2);
        }
        if (line.startsWith('## 3.1') && !injected.has(3)) {
             // 3.0 was present but might have been mangled
        }
    }
    finalLines.push(line);
}

fs.writeFileSync(mdPath, finalLines.join('\n'));
console.log('Restored headers in manual.md with improved regex');
