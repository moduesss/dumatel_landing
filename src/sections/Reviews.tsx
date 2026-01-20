"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import styles from "./Reviews.module.scss";

const SLIDE_GAP = 85;
const VISIBLE_CARDS = 3;

const reviews = [
  {
    id: "review-1",
    title: "Чудо Думатель!",
    quote: [
      "— Раньше я держал десятки таблиц и отчётов на своём рабочем столе,",
      "а теперь всё собирается в одном месте!",
      "",
      "Думатель сам делает сводки и сравнения",
      "без ручных проверок и копирования",
    ],
    name: "Семён Никитин",
    role: "аналитик",
    avatar: "/images/image 7.png",
  },
  {
    id: "review-2",
    title: "Отличный ИИ",
    quote: [
      "— Теперь решения можно принимать гораздо быстрее, я вижу не просто ответ,",
      "а аргументы и источники",
      "",
      "Это убирает споры и делает работу",
      "в разы проще и прозрачнее, спасибо!",
    ],
    name: "Алексей Громов",
    role: "системный администратор",
    avatar: "/images/image 7-1.png",
  },
  {
    id: "review-3",
    title: "Однозначно лайк",
    quote: [
      "— Работа с договорами и нормативами.",
      "Раньше искала пункты вручную, а теперь",
      "ваш Думатель сам находит нужные",
      "условия и выделяет их в тексте",
      "",
      "Экономлю часы работы!",
    ],
    name: "Юлия Патрушева",
    role: "юрист",
    avatar: "/images/image 7-2.png",
  },
  {
    id: "review-4",
    title: "Заголовок отзыва",
    quote: [
      "— Текст отзыва будет добавлен позже.",
      "",
      "Пока это временная заглушка.",
    ],
    name: "Имя Фамилия",
    role: "должность",
    avatar: "/images/image 7.png",
  },
  {
    id: "review-5",
    title: "Заголовок отзыва",
    quote: [
      "— Текст отзыва будет добавлен позже.",
      "",
      "Пока это временная заглушка.",
    ],
    name: "Имя Фамилия",
    role: "должность",
    avatar: "/images/image 7-1.png",
  },
  {
    id: "review-6",
    title: "Заголовок отзыва",
    quote: [
      "— Текст отзыва будет добавлен позже.",
      "",
      "Пока это временная заглушка.",
    ],
    name: "Имя Фамилия",
    role: "должность",
    avatar: "/images/image 7-2.png",
  },
];

export default function Reviews() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (!cardRef.current) {
        return;
      }
      setCardWidth(cardRef.current.getBoundingClientRect().width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const maxIndex = Math.max(0, reviews.length - VISIBLE_CARDS);

  const handlePrev = () => {
    setIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const offset = cardWidth ? -(cardWidth + SLIDE_GAP) * index : 0;

  return (
    <section className={styles.reviews} aria-labelledby="reviews-title">
      <div className={styles["reviews__inner"]}>
        <header className={styles["reviews__heading"]}>
          <h2 id="reviews-title">Что о нас говорят пользователи</h2>
          <p>
            Сценарии, где Думатель экономит часы и снижает ошибки. В каждом
            примере: работа с документами и Web-агент!
          </p>
        </header>

        <div
          className={styles["reviews__viewport"]}
          role="region"
          aria-live="polite"
        >
          <div
            className={styles["reviews__track"]}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {reviews.map((review, reviewIndex) => (
              <article
                key={review.id}
                className={styles["review-card"]}
                ref={reviewIndex === 0 ? cardRef : null}
              >
                <div className={styles["review-card__quote"]}>
                  <Image
                    src={withBasePath("/icons/Vector-24.svg")}
                    alt=""
                    width={47}
                    height={38}
                  />
                </div>
                <h3>{review.title}</h3>
                <blockquote>
                  {review.quote.map((line, lineIndex) => (
                    <p key={`${review.id}-line-${lineIndex}`}>{line}</p>
                  ))}
                </blockquote>
                <div className={styles["review-card__author"]}>
                  <div className={styles["review-card__avatar"]}>
                    <Image
                      src={withBasePath(review.avatar)}
                      alt={`Фото ${review.name}`}
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className={styles["review-card__meta"]}>
                    <p className={styles["review-card__name"]}>{review.name}</p>
                    <p className={styles["review-card__role"]}>{review.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={styles["reviews__controls"]}>
          <Button
            className={styles["reviews__arrow"]}
            type="button"
            variant="ghost"
            size="icon"
            onClick={handlePrev}
            aria-label="Предыдущие отзывы"
            disabled={index === 0}
          >
            <Image
              src={withBasePath("/icons/Arrow Left.svg")}
              alt=""
              width={48}
              height={48}
            />
          </Button>
          <Button variant="primary" size="md" href="https://app.dumatel.ru/">
            Начать пользоваться Думателем
          </Button>
          <Button
            className={styles["reviews__arrow"]}
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleNext}
            aria-label="Следующие отзывы"
            disabled={index === maxIndex}
          >
            <Image
              src={withBasePath("/icons/Arrow Right.svg")}
              alt=""
              width={48}
              height={48}
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
