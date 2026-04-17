import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Noto_Serif_TC,
  Bricolage_Grotesque,
  Space_Mono,
} from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { LoadingCurtain } from "@/components/LoadingCurtain";
import { PaperTexture } from "@/components/PaperTexture";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-en",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif-tc",
  weight: ["400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "IWARE × Ridge Studio — 給山峸製作設計的官網提案",
  description:
    "IWARE 為 Ridge Studio 山峸製作設計設想的官網提案。一份本身就是技術示範的劇場圖錄。",
  metadataBase: new URL("https://ridge-studio-proposal.vercel.app"),
  openGraph: {
    title: "IWARE × Ridge Studio — 給山峸製作設計的官網提案",
    description: "策展、編輯、製作 — 為 Ridge Studio 設想的線上場域。",
    type: "website",
    locale: "zh_TW",
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh-TW"
      className={`${cormorant.variable} ${notoSerifTC.variable} ${bricolage.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased" data-palette="dark">
        <PaperTexture />
        <LoadingCurtain />
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
