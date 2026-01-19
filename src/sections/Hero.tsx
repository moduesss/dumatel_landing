"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { revealOnScroll } from "@/lib/gsap";
import styles from "./Hero.module.scss";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const elements = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const animations = revealOnScroll(elements, { y: 32 });

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, []);

  return (
    <section className={styles.hero} id="hero" ref={rootRef}>
      <div className={styles["hero__background"]}>
        <Image
          src="/images/Image.png"
          alt="Команда работает с документами"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className={styles["hero__overlay"]} />
      </div>

      <div className={styles["hero__content"]} data-reveal>
        <p className={styles["hero__eyebrow"]}>
          Понимает. Анализирует. Генерирует.
        </p>
        <h1 className={styles["hero__title"]}>
          ИИ-пространство <em>для работы</em>
          <br />
          с документами и знаниями
        </h1>
        <p className={styles["hero__subtitle"]}>
          Всё, чтобы понимать, искать и создавать быстрее.
        </p>
      </div>

      <div className={styles["hero__dialog"]} data-reveal>
        <div
          className={[
            styles["hero__dialog-row"],
            styles["hero__dialog-row--user"],
          ].join(" ")}
        >
          <Image
            className={[
              styles["hero__dialog-icon"],
              styles["hero__dialog-icon--left"],
            ].join(" ")}
            src="/icons/Dialog 8.svg"
            alt="Иконка диалога"
            width={48}
            height={48}
          />
          <div
            className={[
              styles["hero__bubble"],
              styles["hero__bubble--user"],
            ].join(" ")}
          >
            <span className={styles["hero__bubble-label"]}>
              Новый пользователь
            </span>
            <p className={styles["hero__bubble-text"]}>
              Думатель, а что ты умеешь?
            </p>
          </div>
        </div>
        <div
          className={[
            styles["hero__dialog-row"],
            styles["hero__dialog-row--assistant"],
          ].join(" ")}
        >
          <div
            className={[
              styles["hero__bubble"],
              styles["hero__bubble--assistant"],
            ].join(" ")}
          >
            <span className={styles["hero__bubble-label"]}>Думатель</span>
            <p className={styles["hero__bubble-text"]}>
              Привет! Я анализирую и сравниваю документы, генерирую точные и
              прозрачные результаты — без хаоса и лишних действий.
            </p>
          </div>
          <Image
            className={[
              styles["hero__dialog-icon"],
              styles["hero__dialog-icon--right"],
            ].join(" ")}
            src="/icons/Dialog 7.svg"
            alt="Иконка диалога"
            width={48}
            height={48}
          />
        </div>
      </div>

      <a className={styles["hero__cta"]} href="https://app.dumatel.ru/" data-reveal>
        Попробовать работать с Думателем
      </a>
    </section>
  );
}
