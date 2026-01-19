"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { revealOnScroll } from "@/lib/gsap";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    const elements = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const animations = revealOnScroll(elements, { y: 32 });

    return () => {
      animations.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
    };
  }, []);

  return (
    <section className="hero" id="hero" ref={rootRef}>
      <div className="hero__background">
        <Image
          src="/images/Image.png"
          alt="Команда работает с документами"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content" data-reveal>
        <p className="hero__eyebrow">Понимает. Анализирует. Генерирует.</p>
        <h1 className="hero__title">
          ИИ-пространство <em>для работы</em>
          <br />
          с документами и знаниями
        </h1>
        <p className="hero__subtitle">
          Всё, чтобы понимать, искать и создавать быстрее.
        </p>
      </div>

      <div className="hero__dialog" data-reveal>
        <div className="hero__dialog-row hero__dialog-row--user">
          <Image
            className="hero__dialog-icon hero__dialog-icon--left"
            src="/icons/Dialog 8.svg"
            alt="Иконка диалога"
            width={48}
            height={48}
          />
          <div className="hero__bubble hero__bubble--user">
            <span className="hero__bubble-label">Новый пользователь</span>
            <p className="hero__bubble-text">Думатель, а что ты умеешь?</p>
          </div>
        </div>
        <div className="hero__dialog-row hero__dialog-row--assistant">
          <div className="hero__bubble hero__bubble--assistant">
            <span className="hero__bubble-label">Думатель</span>
            <p className="hero__bubble-text">
              Привет! Я анализирую и сравниваю документы, генерирую точные и
              прозрачные результаты — без хаоса и лишних действий.
            </p>
          </div>
          <Image
            className="hero__dialog-icon hero__dialog-icon--right"
            src="/icons/Dialog 7.svg"
            alt="Иконка диалога"
            width={48}
            height={48}
          />
        </div>
      </div>

      <a className="hero__cta" href="#cta" data-reveal>
        Попробовать работать с Думателем
      </a>
    </section>
  );
}
