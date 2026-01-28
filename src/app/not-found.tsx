"use client";

import { useEffect, useRef } from "react";
import styles from "./not-found.module.scss";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import Button from "@/components/Button";
import gsap from "gsap";

export default function NotFound() {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLSpanElement | null>(null);
  const buttonWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
      });

      timeline
        .from(logoRef.current, { opacity: 0, y: -12 })
        .from(titleRef.current, { opacity: 0, y: 18 }, "-=0.3")
        .from(subtitleRef.current, { opacity: 0, y: 10 }, "-=0.35")
        .from(buttonWrapRef.current, { opacity: 0, y: 12 }, "-=0.3");
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.logo} aria-hidden="true" ref={logoRef}>
        <Image
          src={withBasePath("/images/404/logo.svg")}
          alt="Логотип Думателя"
          width={180}
          height={50}
        />
      </div>
      <div className={styles.unions} aria-hidden="true">
        <Image
          src={withBasePath("/images/404/unions.svg")}
          alt="Декоративные элементы"
          width={400}
          height={800}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.titleGroup}>
          <span className={styles.title} ref={titleRef}>
            404
          </span>
          <span className={styles.subtitle} ref={subtitleRef}>
            страница не найдена...
          </span>
        </div>
        <div ref={buttonWrapRef}>
          <Button href="/" variant="primary">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </main>
  );
}
