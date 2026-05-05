const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src/content/manual.md');
const markdownContent = fs.readFileSync(filePath, 'utf-8');

const regex = /^(\*\*)*(\d+(\.\d+)*)(?:\.?|\\?|\\\.)*(\s+)(.+?)(\*\*)*$/gm;

const processed = markdownContent.replace(regex, (match, p1, p2, p3, p4, p5) => {
    const cleanText = p5.trim();
    const isMultiSpace = p4.length > 1;
    const isLevel1 = p2.split('.').length === 1;

    if (isLevel1 && (isMultiSpace || cleanText.endsWith('.') || cleanText.length > 50)) {
        return match;
    }
    
    if (isMultiSpace) return match;

    const level = p2.split('.').length;
    const headerLevel = Math.min(level, 3);
    return `${'#'.repeat(headerLevel)} ${p2} ${p5}`;
});

// Find lines for Section 3, 4, 5
const lines = processed.split('\n');
console.log("--- Section 3 ---");
console.log(lines.find(l => l.includes("로그인") && l.startsWith("#")));
console.log("--- Section 4 ---");
console.log(lines.find(l => l.includes("메인 화면 안내") && l.startsWith("#")));
console.log("--- Section 5 ---");
console.log(lines.find(l => l.includes("자동 매매 전략 설정") && l.startsWith("#")));
console.log("--- Problematic Item ---");
console.log(lines.find(l => l.includes("복사된 전략 수정 후 저장") && l.startsWith("#")));

// Find why 3 and 4 might be missing
console.log("\n--- Raw Section 3 line ---");
const rawLines = markdownContent.split('\n');
const raw3 = rawLines.find(l => l.includes("로그인") && /^\d+/.test(l));
console.log(`'${raw3}'`);
const match3 = raw3 ? raw3.match(/^(\*\*)*(\d+(\.\d+)*)(?:\.?|\\?|\\\.)*(\s+)(.+?)(\*\*)*$/) : null;
console.log("Match 3:", match3 ? "YES" : "NO");
if (match3) {
    console.log("p2:", match3[2]);
    console.log("p4 (spaces):", `'${match3[4]}'`);
    console.log("p5 (text):", match3[5]);
}

const raw6 = rawLines.find(l => l.includes("자동 매매 실행 및 모니터링") && /^\d+/.test(l));
console.log(`'${raw6}'`);
const match6 = raw6 ? raw6.match(/^(\*\*)*(\d+(\.\d+)*)(?:\.?|\\?|\\\.)*(\s+)(.+?)(\*\*)*$/) : null;
console.log("Match 6:", match6 ? "YES" : "NO");
if (match6) {
    console.log("p2:", match6[2]);
    console.log("p4 (spaces):", `'${match3[4]}'`);
    console.log("p5 (text):", match6[5]);
}
