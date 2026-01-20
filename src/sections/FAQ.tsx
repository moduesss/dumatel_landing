"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./FAQ.module.scss";

const items = [
  {
    title:
      "В чем преимущество использования Думателя в сравнении с другими ИИ?",
    content:
      "Заглушка ответа. Тут будет развернутое объяснение преимуществ, сценариев использования и отличий от других решений.",
  },
  {
    title: "Есть ли бесплатная версия Думателя?",
    content:
      "Заглушка ответа. Тут будет краткое описание бесплатной версии и ее ограничений.",
  },
  {
    title: "Могу ли я изменить свою подписку после начала использования тарифа?",
    content:
      "Заглушка ответа. Тут будет объяснение условий изменения подписки.",
  },
  {
    title: "Можно ли интегрировать Думателя на крупное предприятие?",
    content:
      "Заглушка ответа. Тут будет информация про корпоративные внедрения и интеграции.",
  },
  {
    title: "Безопасно ли использовать Думателя? Есть ли риск утечки данных?",
    content:
      "Заглушка ответа. Тут будет информация о безопасности, сертификациях и политике хранения данных.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.faq} aria-labelledby="faq-title" id="faq">
      <div className={styles.faq__inner}>
        <div className={styles.faq__aside}>
          <h2 id="faq-title">
            Частые вопросы от наших новых пользователей
          </h2>
          <p>Отвечаем честно на главные сомнения.</p>
          <div className={styles.faq__art} aria-hidden="true">
            <Image
              src="/images/faq-orb.svg"
              alt=""
              width={504}
              height={723}
              priority
            />
          </div>
        </div>

        <div className={styles.faq__list}>
          {items.map((item, index) => {
            const isOpen = index === activeIndex;
            const contentId = `faq-content-${index}`;

            return (
              <article
                key={item.title}
                className={`${styles.faq__item} ${
                  isOpen ? styles["faq__item--open"] : ""
                }`}
              >
                <button
                  className={styles.faq__trigger}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                >
                  <span>{item.title}</span>
                  <Image
                    src={
                      isOpen
                        ? "/icons/faq-toggle-open.svg"
                        : "/icons/faq-toggle-closed.svg"
                    }
                    alt=""
                    width={70}
                    height={70}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={styles.faq__content}
                  id={contentId}
                  aria-hidden={!isOpen}
                >
                  <p>{item.content}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
