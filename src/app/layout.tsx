import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import UtmPersist from "@/components/UtmPersist";
import "./globals.scss";

const siteUrl = "https://dumatel.ru";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Думатель",
    template: "%s | Думатель",
  },
  applicationName: "Думатель",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  description:
    "ИИ-пространство для работы с документами и знаниями. Понимает, анализирует и генерирует.",
  keywords: [
    "Думатель",
    "Думатель ИИ",
    "ИИ для бизнеса",
    "умный поиск",
    "RAG",
    "документооборот",
    "анализ документов",
    "корпоративные знания",
    "генерация текстов",
    "AI workspace",
    "ИИ для юристов",
    "ИИ для бухглатера",
    "ИИ для студента",
    "Российский ИИ"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Думатель",
    title: "Думатель",
    description:
      "ИИ-пространство для работы с документами и знаниями. Понимает, анализирует и генерирует.",
    type: "website",
    url: siteUrl,
    locale: "ru_RU",
    images: [
      {
        url: "/images/hero-poster.webp",
        width: 1200,
        height: 630,
        alt: "Думатель — ИИ-пространство для работы с документами и знаниями",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Думатель",
    description:
      "ИИ-пространство для работы с документами и знаниями. Понимает, анализирует и генерирует.",
    images: ["/images/hero-poster.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
        <UtmPersist />
        {children}
      </body>
    </html>
  );
}
