"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import { useEffect, useRef, useState } from "react";
import styles from "./AssistantCarousel.module.scss";

const SLIDE_GAP = 100;

const slides = [
  {
    id: "auto",
    icon: "/icons/Vector.svg",
    title: "Автоматические атрефакты",
    lead: "Думатель создает готовые документы автоматически.",
    description:
      "Коммерческие предложения, таблицы сравнений, планы и инструкции рождаются прямо из ваших данных!",
    videoSrc: "/videos/Генерация артефактов.mp4",
  },
  {
    id: "web-agent",
    icon: "/icons/Vector-1.svg",
    title: "Встроенный Web-Агент",
    lead: "Думатель выходит в интернет через Web-Агента.",
    description:
      "Он находит актуальные данные, оценивает надежность источников и помогает выбрать лучшее решение на основе фактов.",
    videoSrc: "/videos/Вебагент.mp4",
  },
  {
    id: "knowledge-map",
    icon: "/icons/Vector-2.svg",
    title: "Карта знаний и мастер данных",
    lead: "Думатель строит интерактивные карты.",
    description:
      "Документ становится деревом данных, по которому можно ходить, проваливаться глубже по веткам и быстро находить нужную информацию.",
    videoSrc: "/videos/Майндмап.mp4",
  },
  {
    id: "language",
    icon: "/icons/Vector-3.svg",
    title: "Понимание естественного языка",
    lead: "Вы можете задать думателю свой вопрос голосом или текстом.",
    description:
      "Можно спросить голосом или текстом в чате, получив точный ответ с рассуждениями и указанием всех источников.",
    videoSrc: "/videos/Естественные языки.mp4",
  },
  {
    id: "archive",
    icon: "/icons/Vector-4.svg",
    title: "Мультиформатный архив",
    lead: "Переносите все ваши файлы, а именно:",
    description: null,
    list: [
      "PDF, DOCX, Excel",
      "сканы и фотографии",
      "презентации (PPTX)",
      "отчеты, таблицы, схемы",
      "аудиозаписи (mp3, mp4)",
    ],
    videoSrc: "/videos/Мультиформатность.mp4",
  },
  {
    id: "entities",
    icon: "/icons/Vector-5.svg",
    title: "Извлечение и анализ сущностей",
    lead: "Думатель может извлекать нужную информацию.",
    description:
      "Вы можете создать сводную таблицу с нужными данными из разных документов одним простым текстовым запросом.",
    videoSrc: "/videos/Экстракция сущностей.mp4",
  },
];

const fileIcons = [
  { src: "/icons/Frame 2131328722.svg", label: "PDF" },
  { src: "/icons/Frame 2131328722-1.svg", label: "DOC" },
  { src: "/icons/Frame 2131328722-2.svg", label: "XLS" },
  { src: "/icons/Frame 2131328722-3.svg", label: "PPTX" },
  { src: "/icons/VIDEO.svg", label: "Video" },
  { src: "/icons/AUDIO.svg", label: "Audio" },
  { src: "/icons/IMAGE.svg", label: "Image" },
];

export default function AssistantCarousel() {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const updateWidth = () => {
      if (!slideRef.current) {
        return;
      }
      setCardWidth(slideRef.current.getBoundingClientRect().width);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!cardWidth) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 31000);

    return () => window.clearInterval(interval);
  }, [cardWidth]);

    useEffect(() => {
      videoRefs.current.forEach((v, i) => {
        if (!v) return;
        if (i === activeIndex) {
          v.currentTime = 0;
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      });
    }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const offset = cardWidth ? -(cardWidth + SLIDE_GAP) * activeIndex : 0;

  return (
    <section
      className={styles["assistant-carousel"]}
      aria-labelledby="assistant-heading"
      id="product" 
    >
      <div className={styles["assistant-carousel__inner"]}>
        <div className={styles["assistant-carousel__title"]}>
          <h2 id="assistant-heading">
            Ваш <em>ИИ-помощник</em> при работе с файлами
          </h2>
          <p>
            Задайте вопрос текстом, либо голосом — я дам точный и
            структурированный ответ
          </p>
        </div>

        <div className={styles["assistant-carousel__controls"]}>
          <button
            className={styles["assistant-carousel__arrow"]}
            type="button"
            onClick={handlePrev}
            aria-label="Предыдущий слайд"
          >
            <Image
              src={withBasePath("/icons/Arrow Left.svg")}
              alt=""
              width={48}
              height={48}
            />
          </button>
          <button
            className={styles["assistant-carousel__arrow"]}
            type="button"
            onClick={handleNext}
            aria-label="Следующий слайд"
          >
            <Image
              src={withBasePath("/icons/Arrow Right.svg")}
              alt=""
              width={48}
              height={48}
            />
          </button>
        </div>

        <div className={styles["assistant-carousel__viewport"]}>
          <div
            className={styles["assistant-carousel__track"]}
            style={{ transform: `translateX(${offset}px)` }}
          >
            {slides.map((slide, index) => (
              <article
                key={slide.id}
                className={styles["assistant-carousel__card"]}
                ref={index === 0 ? slideRef : null}
              >
                <div className={styles["assistant-carousel__content"]}>
                  <Image
                    src={withBasePath(slide.icon)}
                    alt=""
                    width={38}
                    height={38}
                  />
                  <h3>{slide.title}</h3>
                  <p className={styles["assistant-carousel__lead"]}>
                    {slide.lead}
                  </p>
                  {slide.description ? (
                    <p className={styles["assistant-carousel__description"]}>
                      {slide.description}
                    </p>
                  ) : null}
                  {slide.list ? (
                    <ul className={styles["assistant-carousel__list"]}>
                      {slide.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {slide.id === "archive" ? (
                    <div className={styles["assistant-carousel__files"]}>
                      {fileIcons.map((icon) => (
                        <div
                          className={styles["assistant-carousel__file"]}
                          key={icon.label}
                        >
                          <Image
                            src={withBasePath(icon.src)}
                            alt={icon.label}
                            width={25}
                            height={33}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className={styles["assistant-carousel__media"]}>
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className={styles["assistant-carousel__media-video"]}
                    src={withBasePath(slide.videoSrc)}
                    muted
                    playsInline
                    loop
                    preload="metadata"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
