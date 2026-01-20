"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useState } from "react";
import { withBasePath } from "@/lib/paths";
import Button from "@/components/Button";
import styles from "./FAQ.module.scss";

const items = [
  {
    title:
      "В чем преимущество использования Думателя в сравнении с другими ИИ?",
    content:
      `«Думатель» - это не просто чат-бот, а интеллектуальное пространство, которое понимает смысл ваших документов. Он объединяет хранение, поиск и генерацию в одной среде и работает на архитектуре RAG (Retrieval-Augmented Generation), которая обеспечивает точность и прозрачность ответов. 
      Обычные ИИ-модели, такие как ChatGPT, работают с “сжатыми представлениями” текста — они не хранят полный массив данных, а пересказывают его в сокращённой форме. 
      При этом часть информации теряется, а контекст и структура документа исчезают. «Думатель» индексирует весь массив данных, анализирует каждую страницу и отвечает на основе реальных источников с прозрачными ссылками и подсветкой фрагментов в тексте.
      Благодаря этому он не “угадывает” ответ, а восстанавливает точный контекст, сохраняя смысл, структуру и фактическую достоверность. Дополнительно система автоматически создаёт рабочие артефакты — таблицы, ТКП, аналитические сводки, договоры и отчёты. Это экономит десятки часов рутины и превращает знания компании в управляемый капитал.`,
  },
  {
    title: "Есть ли бесплатная версия Думателя?",
    content:
      `Базовая версия доступна бесплатно и позволяет загружать ограниченный объём файлов, работать с проектами и создавать артефакты в пределах месячного лимита кредитов. Этого достаточно, чтобы оценить возможности системы. Для расширения лимитов и доступа к корпоративным функциям 
      (совместная работа, онтология, ролевые права, on-prem-развёртывание) доступны платные тарифы.`,
  },
  {
    title: "Могу ли я изменить свою подписку после начала использования тарифа?",
    content:
      `Да, в любой момент. Вы можете перейти на другой тариф, увеличить лимит кредитов. Все данные, проекты и артефакты при этом сохраняются.`,
  },
  {
    title: "Можно ли интегрировать Думателя на крупное предприятие?",
    content:
      `Да. «Думатель» поддерживает корпоративное развёртывание (on-prem) , а также внутренними базами документов. Возможна работа как в облаке, так и на собственных серверах заказчика. 
      Архитектура системы гибко масштабируется под отдел, департамент или всю организацию.`,
  },
  {
    title: "Безопасно ли использовать Думателя? Есть ли риск утечки данных?",
    content:
      `Безопасность - один из ключевых принципов. Все данные пользователей шифруются, изолируются и не используются для обучения моделей. 
      Для корпоративных клиентов реализовано разграничение прав доступа, контроль версий и возможность полностью автономного (on-prem) развёртывания. 
      Таким образом, документы и знания остаются только у вас.`,
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);
  const logoStyle = {
    "--faq-logo-url": `url(${withBasePath("/icons/logo-vector.svg")})`,
  } as CSSProperties;

  return (
    <section className={styles.faq} aria-labelledby="faq-title" id="faq">
      <div className={styles.faq__inner}>
        <div className={styles.faq__aside}>
          <h2 id="faq-title">
            Частые вопросы от наших новых пользователей
          </h2>
          <p>Отвечаем честно на главные сомнения.</p>
          <div className={styles.faq__art} aria-hidden="true">
            <div
              className={styles.faq__logo}
              style={logoStyle}
              aria-hidden="true"
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
                <Button
                  className={styles.faq__trigger}
                  type="button"
                  variant="ghost"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                >
                  <span>{item.title}</span>
                  <Image
                    src={withBasePath(
                      isOpen
                        ? "/icons/faq-toggle-open.svg"
                        : "/icons/faq-toggle-closed.svg"
                    )}
                    alt=""
                    width={70}
                    height={70}
                    aria-hidden="true"
                  />
                </Button>
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
