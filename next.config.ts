import type { NextConfig } from "next";
import { NAVER_CAFE_URL } from "./src/lib/nav";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // 사이트 게시판 · 로그인은 삭제했다. 예전 링크가 404 로 끝나지 않게 보낸다.
  async redirects() {
    return [
      { source: "/boards", destination: NAVER_CAFE_URL, permanent: true },
      { source: "/boards/:path*", destination: NAVER_CAFE_URL, permanent: true },
      { source: "/login", destination: "/", permanent: true },
      { source: "/signup", destination: "/", permanent: true },
      { source: "/auth/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
