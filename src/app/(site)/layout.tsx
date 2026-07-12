import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 전역 헤더/푸터가 필요한 페이지 그룹 (홈·게시판·약관 등)
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}
