import type { Metadata } from "next";
import { Playfair_Display, Inter, IBM_Plex_Mono, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["400", "500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans-tc",
  weight: ["300", "400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "IWARE × Ridge Studio — 給山峸製作設計的官網提案",
  description:
    "IWARE 為 Ridge Studio 山峸製作設計設想的官網提案。一份本身就是技術示範的 pitch microsite。",
  metadataBase: new URL("https://ridge-studio-proposal.vercel.app"),
  openGraph: {
    title: "IWARE × Ridge Studio — 給山峸製作設計的官網提案",
    description: "策展、編輯、製作 — 為 Ridge Studio 設想的線上場域。",
    type: "website",
    locale: "zh_TW",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${playfair.variable} ${inter.variable} ${notoSansTC.variable} ${ibmPlexMono.variable}`}
    >
      <body className="antialiased" data-palette="white">
        {children}
      </body>
    </html>
  );
}
