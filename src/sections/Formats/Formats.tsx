"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionStyle = {
    "--formats-dots-url": `url(${withBasePath("/icons/formats-dots.svg")})`,
  } as CSSProperties;

  const modalImages = useMemo(
    () => ({
      picture: "/images/form_img.png",
      login: "/svg/login.svg",
      email: "/svg/email.svg",
    }),
    []
  );

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupFormatsAnimations(rootRef.current);
  }, []);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  const handleModalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    const subject = "Запрос интеграции Думатель";
    const bodyLines = [
      "Здравствуйте!",
      "",
      "Хочу обсудить интеграцию Думателя.",
      name ? `Имя: ${name}` : null,
      email ? `Email: ${email}` : null,
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:info@dumatel.ru?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    window.location.href = mailto;
    setIsModalOpen(false);
    form.reset();
  };

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
            <Button variant="primary" type="button" onClick={() => setIsModalOpen(true)}>
              Обсудить интеграцию
            </Button>
          </article>
        </div>
      </div>

      {isModalOpen ? (
        <div
          className={styles.formats__modal}
          role="dialog"
          aria-modal="true"
          aria-label="Обсудить интеграцию"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles["formats__modal-inner"]}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles["formats__modal-back"]}
              type="button"
              onClick={() => setIsModalOpen(false)}
            >
              ← Назад
            </button>

            <div className={styles["formats__modal-content"]}>
              <div className={styles["formats__modal-left"]}>
                <div className={styles["formats__modal-logo"]}>
                  <Image
                    src={withBasePath("/icons/Group 298956478.svg")}
                    alt="Думатель"
                    width={204}
                    height={44}
                  />
                </div>

                <h3 className={styles["formats__modal-title"]}>
                  Протестируйте возможности
                  <br />
                  Думателя своими руками!
                </h3>

                <form
                  className={styles["formats__modal-form"]}
                  onSubmit={handleModalSubmit}
                >
                  <label className={styles["formats__modal-field"]}>
                    <span className={styles["formats__modal-icon"]}>
                      <Image
                        src={modalImages.login}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      autoComplete="name"
                    />
                  </label>

                  <label className={styles["formats__modal-field"]}>
                    <span className={styles["formats__modal-icon"]}>
                      <Image
                        src={modalImages.email}
                        alt=""
                        width={32}
                        height={32}
                      />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Ваша электронная почта"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <p className={styles["formats__modal-note"]}>
                    Нажимая кнопку “Протестировать” вы соглашаетесь на обработку
                    персональных данных вместе с Политикой Конфиденциальности.
                  </p>

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    className={styles["formats__modal-submit"]}
                  >
                    Попробовать работать с Думателем
                  </Button>
                </form>
              </div>

              <div className={styles["formats__modal-right"]}>
                <Image
                  src={modalImages.picture}
                  alt=""
                  fill
                  className={styles["formats__modal-image"]}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
