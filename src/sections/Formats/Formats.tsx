"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { withBasePath } from "@/lib/paths";
import styles from "./Formats.module.scss";
import Button from "@/components/Button";
import { setupFormatsAnimations } from "./Formats.anim";

const cloudPoints = [
  "Не требует собственной инфраструктуры",
  "Доступ из любой точки - инженеры и руководители работают в одной системе",
  "Автоматические обновления и поддержка включены",
  "Удобно для тестирования новых решений",
];

const onPremPoints = [
  "Установка на серверах предприятия",
  "Все документы и база знаний хранятся локально",
  "Подходит для объектов с повышенными требованиями безопасности",
];

export default function Formats() {
  const rootRef = useRef<HTMLElement | null>(null);
  const sectionStyle = {
    "--formats-dots-url": `url(${withBasePath("/icons/formats-dots.svg")})`,
  } as CSSProperties;

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupFormatsAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles.formats}
      aria-labelledby="formats-title"
      id="usage"
      style={sectionStyle}
      ref={rootRef}
      data-section="formats"
    >
      <div className={styles.formats__inner}>
        <h2
          id="formats-title"
          className={styles.formats__title}
          data-anim="formats-title"
        >
          Форматы использования Думателя
        </h2>

        <div className={styles.formats__cards}>
          <article className={styles.formats__card} data-anim="formats-card">
            <div className={styles["formats__card-header"]}>
              <Image
                src={withBasePath("/icons/formats-cloud.svg")}
                alt="Облако"
                width={36}
                height={32}
              />
              <p className={styles["formats__card-title"]}>
                Облако — включено в базовые тарифы
              </p>
            </div>
            <ul className={styles.formats__list}>
              {cloudPoints.map((point) => (
                <li key={point} data-anim="formats-item">
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className={styles.formats__card} data-anim="formats-card">
            <div className={styles["formats__card-header"]}>
              <Image
                src={withBasePath("/icons/formats-onprem.svg")}
                alt="On-Premise"
                width={32}
                height={32}
              />
              <p className={styles["formats__card-title"]}>
                On-Premise обсуждается индивидуально
              </p>
            </div>
            <ul className={styles.formats__list}>
              {onPremPoints.map((point) => (
                <li key={point} data-anim="formats-item">
                  {point}
                </li>
              ))}
            </ul>
            <Button 
              variant="primary" 
              href="https://app.dumatel.ru"
              style={{ width: 250 }}
            >
              Обсудить интеграцию
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
