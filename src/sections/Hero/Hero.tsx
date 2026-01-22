"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { setupHeroAnimations } from "./Hero.anim";
import { withBasePath } from "@/lib/paths";
import Button from "@/components/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupHeroAnimations(rootRef.current);
  }, []);

  return (
    <section className={styles.hero} ref={rootRef} data-section="hero">
      <div className={styles["hero__background"]}>
        <video
          className={styles["hero__video"]}
          src={withBasePath("/videos/hero.mov")}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          poster={withBasePath("/images/hero-poster.jpg")}
        />
        <div className={styles["hero__overlay"]} />
      </div>

      <div className={styles["hero__content"]} data-reveal>
        <p className={styles["hero__eyebrow"]} data-anim="hero-eyebrow">
          Понимает. Анализирует. Генерирует.
        </p>
        <h1 className={styles["hero__title"]} data-anim="hero-title">
          ИИ-пространство <em>для работы</em>
          <br />
          с документами и знаниями
        </h1>
        <p className={styles["hero__subtitle"]} data-anim="hero-subtitle">
          Всё, чтобы понимать, искать и создавать быстрее.
        </p>
      </div>

      <div className={styles["hero__dialog"]} data-reveal>
        <div
          className={[
            styles["hero__dialog-row"],
            styles["hero__dialog-row--user"],
          ].join(" ")}
          data-anim="hero-dialog-user"
        >
          <Image
            className={[
              styles["hero__dialog-icon"],
              styles["hero__dialog-icon--left"],
            ].join(" ")}
            src={withBasePath("/icons/Dialog 8.svg")}
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
          data-anim="hero-dialog-assistant"
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
            src={withBasePath("/icons/Dialog 7.svg")}
            alt="Иконка диалога"
            width={48}
            height={48}
          />
        </div>
      </div>

      <div className={styles["hero__cta"]} data-anim="hero-cta">
        <Button variant="primary" size="lg" href="https://app.dumatel.ru/">
          Попробовать Думатель бесплатно
        </Button>
      </div>
    </section>
  );
}
