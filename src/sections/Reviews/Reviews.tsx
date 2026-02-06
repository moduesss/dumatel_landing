"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { memo, useEffect, useRef, useState } from "react";
import type { Ref } from "react";
import Button from "@/components/Button";
import { setupReviewsAnimations } from "./Reviews.anim";
import styles from "./Reviews.module.scss";

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
    avatar: "/images/reviews/analytics-avatar.png",
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
    avatar: "/images/reviews/admin-avatar.png",
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
    avatar: "/images/reviews/jurist-avatar.png",
  },
  {
    id: "review-4",
    title: "Я в восторге!",
    quote: [
      `— С Думателем я реально начал понимать,
      что могу получить доступ к информации
      быстрее чем любой человек, потому что
      поиск происходит мгновенно`,
    ],
    name: "Николай Багров",
    role: "инженер",
    avatar: "/images/reviews/engeneer-avatar.png",
  },
  {
    id: "review-5",
    title: "Мне нравится",
    quote: [
      `— Я работаю с документами каждый день: отчёты, договоры, регламенты. 
      Раньше поиск нужного пункта занимал часы: открывала десятки файлов и сверяла вручную. 
      С Думателем всё проще — задаю вопрос, и он сразу показывает нужное место в тексте с пояснением.`,
    ],
    name: "Василиса Орленока",
    role: "менеджер по качеству",
    avatar: "/images/reviews/manager-avatar.png",
  },
  {
    id: "review-6",
    title: "Неплохо",
    quote: [
      `— В закупках важно не пропустить детали. Я загружаю ТКП от поставщиков, и Думатель сам сравнивает цены, сроки и условия. 
      Теперь я вижу полную картину за пару минут, без ручного свода.`,
    ],
    name: "Борис Андреев",
    role: "специалист по закупкам",
    avatar: "/images/reviews/buyer-avatar.png",
  },
  {
    id: "review-7",
    title: "Лучше чем ГПТ",
    quote: [
      `— Определенно Думатель справляется
        лучше с теми задачами, которые мне
        нужно было решать часами

        Работает быстро, подписка недорогая
        всё классно, пользуюсь!`,
    ],
    name: "Василиса Никитенко",
    role: "студент",
    avatar: "/images/reviews/student-avatar.png",
  },
];

type Review = (typeof reviews)[number];

type ReviewCardProps = {
  review: Review;
  index: number;
  cardRef?: Ref<HTMLElement>;
};

const ReviewCard = memo(function ReviewCard({
  review,
  index,
  cardRef,
}: ReviewCardProps) {
  return (
    <article
      className={styles["review-card"]}
      ref={cardRef}
      data-anim="rv-card"
      data-index={index}
    >
      <div className={styles["review-card__quote"]}>
        <Image
          src={withBasePath("/icons/Vector-24.svg")}
          alt=""
          width={47}
          height={38}
        />
      </div>
      <h3 data-anim="rv-title">{review.title}</h3>
      <blockquote data-anim="rv-quote">
        {review.quote.map((line, lineIndex) => (
          <p key={`${review.id}-line-${lineIndex}`}>{line}</p>
        ))}
      </blockquote>
      <div className={styles["review-card__author"]} data-anim="rv-author">
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
  );
});

export default function Reviews() {
  const rootRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardGap, setCardGap] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupReviewsAnimations(rootRef.current);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (!cardRef.current) {
        return;
      }
      setCardWidth(cardRef.current.getBoundingClientRect().width);
      if (trackRef.current) {
        const style = window.getComputedStyle(trackRef.current);
        const gapValue = style.columnGap || style.gap || "0";
        const parsedGap = Number.parseFloat(gapValue);
        setCardGap(Number.isNaN(parsedGap) ? 0 : parsedGap);
      }
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

  const offset = cardWidth ? -(cardWidth + cardGap) * index : 0;

  return (
    <section
      className={styles.reviews}
      aria-labelledby="reviews-title"
      ref={rootRef}
      data-section="reviews"
    >
      <div className={styles["reviews__inner"]}>
        <header className={styles["reviews__heading"]}>
          <h2 id="reviews-title" data-anim="reviews-heading">
            Что о нас говорят пользователи
          </h2>
        </header>

        <div
          className={styles["reviews__viewport"]}
          role="region"
          aria-live="polite"
        >
          <div
            className={styles["reviews__track"]}
            ref={trackRef}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {reviews.map((review, reviewIndex) => (
              <ReviewCard
                key={review.id}
                review={review}
                index={reviewIndex}
                cardRef={reviewIndex === 0 ? cardRef : undefined}
              />
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
