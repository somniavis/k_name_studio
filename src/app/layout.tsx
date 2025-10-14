import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/StructuredData';

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
  title: "Free Korean Name Generator | Premium Names Only $2.99 (70% OFF!)",
  description: "Get perfect Korean names FREE by birth date! Premium package: 3 exclusive names + K-pop star matches + 2 soulmate names - NOW $2.99 (was $9.99). Limited time!",
  keywords: "free korean name generator, korean names $2.99, korean name discount, k-pop name matching, korean birth date names, affordable korean names, korean astrology, saju naming",
  openGraph: {
    title: "Korean Name Studio | Premium Names $2.99 (70% OFF)",
    description: "FREE Korean names by birth date + Premium K-pop star matching for just $2.99!",
    type: "website",
    siteName: "Korean Name Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korean Names $2.99 | 70% OFF Premium Package",
    description: "Get K-pop star name matching + soulmate names for just $2.99 (was $9.99)!",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://koreannamestudio.com',
    languages: {
      'en': 'https://koreannamestudio.com/en',
      'ko': 'https://koreannamestudio.com/ko',
      'ja': 'https://koreannamestudio.com/ja',
      'zh': 'https://koreannamestudio.com/zh',
      'fr': 'https://koreannamestudio.com/fr',
      'de': 'https://koreannamestudio.com/de',
      'es': 'https://koreannamestudio.com/es',
      'ru': 'https://koreannamestudio.com/ru',
      'ar': 'https://koreannamestudio.com/ar',
      'hi': 'https://koreannamestudio.com/hi',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
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
