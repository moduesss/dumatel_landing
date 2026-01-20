import Image from "next/image";
import type { CSSProperties } from "react";
import { withBasePath } from "@/lib/paths";
import styles from "./Formats.module.scss";

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
  const sectionStyle: CSSProperties = {
    "--formats-dots-url": `url(${withBasePath("/icons/formats-dots.svg")})`,
  };

  return (
    <section
      className={styles.formats}
      aria-labelledby="formats-title"
      id="usage"
      style={sectionStyle}
    >
      <div className={styles.formats__inner}>
        <h2 id="formats-title" className={styles.formats__title}>
          Форматы использования Думателя
        </h2>

        <div className={styles.formats__cards}>
          <article className={styles.formats__card}>
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
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>

          <article className={styles.formats__card}>
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
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className={styles.formats__cta} href="#cta">
              Обсудить интеграцию
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
