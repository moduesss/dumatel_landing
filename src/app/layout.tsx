/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import UtmPersist from "@/components/UtmPersist";
import "./globals.scss";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://blog.dumatel.ru";

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
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105404879', 'ym');

            ym(105404879, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `,
        }}
      />
      <body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105404879"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <UtmPersist />
        {children}
      </body>
    </html>
  );
}
