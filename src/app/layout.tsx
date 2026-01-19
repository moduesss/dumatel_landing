import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Думатель",
    template: "%s | Думатель",
  },
  description:
    "ИИ-пространство для работы с документами и знаниями. Понимает, анализирует и генерирует.",
  openGraph: {
    title: "Думатель",
    description:
      "ИИ-пространство для работы с документами и знаниями. Понимает, анализирует и генерирует.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Думатель",
    description:
      "ИИ-пространство для работы с документами и знаниями. Понимает, анализирует и генерирует.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
