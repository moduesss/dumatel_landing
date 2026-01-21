"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { withBasePath } from "@/lib/paths";
import Button from "@/components/Button";
import { setupComparisonMatrixAnimations } from "./ComparisonMatrix.anim";
import styles from "./ComparisonMatrix.module.scss";

const columns = [
  {
    id: "dumatel",
    icon: "/icons/comparison-dumatel.svg",
    alt: "Думатель",
  },
  { id: "chatgpt", icon: "/icons/comparison-chatgpt.svg", alt: "ChatGPT" },
  { id: "grok", icon: "/icons/comparison-grok.svg", alt: "Grok" },
  { id: "deepseek", icon: "/icons/comparison-deepseek.svg", alt: "DeepSeek" },
];

type CellLevel = "high" | "mid" | "low";

const rows: Array<{
  id: string;
  label: string;
  cells: Array<{ text: string; level: CellLevel }>;
}> = [
  {
    id: "docs",
    label: "Работа с документами",
    cells: [
      { text: "Безлимитная", level: "high" },
      { text: "Ограниченная", level: "mid" },
      { text: "Ограниченная", level: "mid" },
      { text: "Ограниченная", level: "mid" },
    ],
  },
  {
    id: "context",
    label: "Контекстное окно",
    cells: [
      { text: "Неограниченно встроенный RAG", level: "high" },
      { text: "1 000 000 токенов", level: "high" },
      { text: "256 000 токенов", level: "mid" },
      { text: "128 000 токенов", level: "low" },
    ],
  },
  {
    id: "recognition",
    label: "Распознавание документов",
    cells: [
      { text: "Структурированное извлечение", level: "high" },
      { text: "Ограниченная", level: "mid" },
      { text: "Ограниченная", level: "mid" },
      { text: "Ограниченная", level: "mid" },
    ],
  },
  {
    id: "artifacts",
    label: "Генерация артефактов",
    cells: [
      { text: "Документ на основе фактов", level: "high" },
      { text: "Нет проверки фактов", level: "mid" },
      { text: "Нет проверки фактов", level: "mid" },
      { text: "Отсутствует", level: "low" },
    ],
  },
  {
    id: "responses",
    label: "Ответ на основе документов",
    cells: [
      { text: "Ссылки на фрагменты документов", level: "high" },
      { text: "Отсутствует", level: "low" },
      { text: "Отсутствует", level: "low" },
      { text: "Отсутствует", level: "low" },
    ],
  },
  {
    id: "accuracy",
    label: "Точность расчётов",
    cells: [
      { text: "Математическая", level: "high" },
      { text: "Галлюцинации", level: "mid" },
      { text: "Галлюцинации", level: "mid" },
      { text: "Галлюцинации", level: "mid" },
    ],
  },
];

export default function ComparisonMatrix() {
  const rootRef = useRef<HTMLElement | null>(null);
  const sectionStyle = {
    "--comparison-icons": `url(${withBasePath("/icons/comparison-icons.svg")})`,
  } as CSSProperties;

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupComparisonMatrixAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles.comparison}
      aria-labelledby="comparison-title"
      style={sectionStyle}
      ref={rootRef}
    >
      <div className={styles.comparison__inner}>
        <header className={styles.comparison__header}>
          <h2 id="comparison-title">
            Наглядное сравнение <em>Думателя</em> с другими нейросетями
          </h2>
          <p>
            Мы провели множество тестов, опросов пользователей и готовы
            предоставить вам прозрачную статистику и результат.
          </p>
        </header>

        <div className={styles.comparison__table} role="table">
          <div className={styles.comparison__grid}>
            <div className={styles.comparison__labels}>
              {rows.map((row, index) => (
                <div
                  key={row.id}
                  className={[
                    styles.comparison__label,
                    styles[`comparison__label--${index}`],
                  ].join(" ")}
                >
                  {row.label}
                </div>
              ))}
            </div>

            <div className={styles.comparison__data}>
              <div className={styles.comparison__columns}>
                {columns.map((column) => (
                  <div key={column.id} className={styles.comparison__column}>
                    <Image
                      src={withBasePath(column.icon)}
                      alt={column.alt}
                      width={42}
                      height={42}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.comparison__cells}>
                {rows.map((row) => (
                  <div key={row.id} className={styles.comparison__row}>
                    {row.cells.map((cell, index) => (
                      <div key={`${row.id}-${index}`} className={styles.comparison__card}>
                        <p className={styles["comparison__card-text"]}>{cell.text}</p>
                        <div
                          className={styles.comparison__meter}
                          data-level={cell.level}
                        >
                          <span className={styles["comparison__meter-track"]} />
                          <span className={styles["comparison__meter-fill"]} />
                          <span
                            className={[
                              styles["comparison__meter-dot"],
                              styles["comparison__meter-dot--start"],
                            ].join(" ")}
                          />
                          <span
                            className={[
                              styles["comparison__meter-dot"],
                              styles["comparison__meter-dot--mid"],
                            ].join(" ")}
                          />
                          <span
                            className={[
                              styles["comparison__meter-dot"],
                              styles["comparison__meter-dot--end"],
                            ].join(" ")}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Button variant="primary" size="lg" href="https://app.dumatel.ru/">
          Попробовать Думатель бесплатно
        </Button>
      </div>
    </section>
  );
}
