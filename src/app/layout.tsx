import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Korean Name Studio | 한국 이름 스튜디오",
  description: "Discover your perfect Korean name with Saju astrology and cultural insights. Premium features include Hanja analysis and K-pop star matches.",
  keywords: "Korean name generator, Saju astrology, Hanja analysis, K-pop names, Korean culture",
  openGraph: {
    title: "Korean Name Studio",
    description: "Find your perfect Korean name",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoSansKr.variable} font-english antialiased`}
      >
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
