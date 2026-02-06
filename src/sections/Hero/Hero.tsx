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
    <section
      className={styles.hero}
      ref={rootRef}
      data-section="hero"
      id="product"
    >
      <div className={styles["hero__background"]} aria-hidden="true">
        <Image
          className={[styles["hero__pattern"], styles["hero__pattern--left"]].join(
            " "
          )}
          src={withBasePath("/f3c5950a5039b51fd7546283cfd49a3526499f13.svg")}
          alt=""
          width={739}
          height={731}
          priority
        />
        <Image
          className={[
            styles["hero__pattern"],
            styles["hero__pattern--right"],
          ].join(" ")}
          src={withBasePath("/d87d5e55f1915d1a355f7b3d9c20a5a1c77061c7.svg")}
          alt=""
          width={739}
          height={731}
          priority
        />
      </div>

      <div className={styles["hero__content"]} data-reveal>
        <p className={styles["hero__eyebrow"]} data-anim="hero-eyebrow">
          Понимает. Анализирует. Генерирует.
        </p>
        <h1 className={styles["hero__title"]} data-anim="hero-title">
          Ваш <em>ИИ-помощник</em> для работы
          <br />с большим объёмом задач и документов
        </h1>
        <p className={styles["hero__subtitle"]} data-anim="hero-subtitle">
          Делает за минуты то, на что раньше уходили дни и недели.
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
            src={withBasePath(
              "/2562bb089dfb5d160f95eb654a94056d37e205b9.svg"
            )}
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
            src={withBasePath(
              "/40bcf6adb0f0dbd0ced2b8c8543fcc1ce8f79dbd.svg"
            )}
            alt="Иконка диалога"
            width={48}
            height={48}
          />
        </div>
      </div>

      <div className={styles["hero__cta"]} data-anim="hero-cta">
        <Button
          variant="primary"
          href="https://app.dumatel.ru/"
        >
          Попробовать работать с Думателем
        </Button>
      </div>
    </section>
  );
}
