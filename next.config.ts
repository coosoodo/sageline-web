import type { NextConfig } from "next";
import { NAVER_CAFE_URL } from "./src/lib/nav";

// Supabase Storage 등 원격 이미지를 next/image로 최적화하기 위한 호스트
const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : undefined;

const nextConfig: NextConfig = {
  reactCompiler: true,
  // 사이트 게시판은 삭제했다. 예전 게시판 링크는 네이버 카페로 보낸다.
  async redirects() {
    return [
      { source: "/boards", destination: NAVER_CAFE_URL, permanent: true },
      { source: "/boards/:path*", destination: NAVER_CAFE_URL, permanent: true },
    ];
  },
  images: {
    remotePatterns: supabaseHost
      ? [{ protocol: "https", hostname: supabaseHost }]
      : [],
  },
};

export default nextConfig;
