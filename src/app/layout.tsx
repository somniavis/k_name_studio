import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/StructuredData';
import { seoConfig } from '@/config/seo';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const defaultSeo = seoConfig.languages.en;

export const metadata: Metadata = {
  title: defaultSeo.title,
  description: defaultSeo.description,
  keywords: defaultSeo.keywords,
  verification: {
    google: "DffLH4e1lLEUZ7W8wuUR51NWVJbKuT5xHJ1SSRTaybM",
  },
  openGraph: {
    title: defaultSeo.ogTitle,
    description: defaultSeo.ogDescription,
    type: "website",
    siteName: "Korean Name Studio",
    url: seoConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultSeo.twitterTitle,
    description: defaultSeo.description,
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
    canonical: seoConfig.baseUrl,
    languages: {
      'en': `${seoConfig.baseUrl}?lang=en`,
      'ko': `${seoConfig.baseUrl}?lang=ko`,
      'ja': `${seoConfig.baseUrl}?lang=ja`,
      'de': `${seoConfig.baseUrl}?lang=de`,
      'es': `${seoConfig.baseUrl}?lang=es`,
      'fr': `${seoConfig.baseUrl}?lang=fr`,
      'it': `${seoConfig.baseUrl}?lang=it`,
      'pt': `${seoConfig.baseUrl}?lang=pt`,
      'th': `${seoConfig.baseUrl}?lang=th`,
      'id': `${seoConfig.baseUrl}?lang=id`,
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
