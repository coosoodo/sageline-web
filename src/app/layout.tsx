import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import { BASE_OPEN_GRAPH } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 가변 폰트 한 벌로 100~900 전 굵기를 쓴다. 굵기를 나열하면 굵기마다
// 한글 unicode-range 조각(약 120개)이 반복되어 @font-face 가 600개를 넘는다.
const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://sageline.co.kr"),
  title: {
    default: "SAGE LINE | 현명한 선택, 명확한 길",
    template: "%s | SAGE LINE",
  },
  description:
    "키움증권 API 기반 주식 자동매매 프로그램 '부엉이 트레이더'를 만듭니다. 데이터 기반의 통찰력과 전략적 기술로 개인 투자자의 성공을 설계하는 파트너, 세이지라인입니다.",
  keywords: ["부엉이 트레이더", "부엉이 트레이더 프로", "부엉이 트레이더 라이트", "자동매매", "주식 자동매매", "키움증권 API", "퀀트 투자", "세이지라인", "SAGELINE"],
  openGraph: {
    ...BASE_OPEN_GRAPH,
    title: "SAGE LINE | 현명한 선택, 명확한 길",
    description: "키움증권 API 기반 주식 자동매매 프로그램 '부엉이 트레이더' — 개인 투자자를 위한 퀀트 투자 솔루션",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* JS 가 켜진 경우에만 스크롤 등장 효과로 숨긴다 (globals.css [data-js] [data-reveal]) */}
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.dataset.js=""' }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
