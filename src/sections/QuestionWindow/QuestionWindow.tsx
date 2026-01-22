"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/paths";
import Button from "@/components/Button";
import { setupQuestionWindowAnimations } from "./QuestionWindow.anim";
import styles from "./QuestionWindow.module.scss";

export default function QuestionWindow() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupQuestionWindowAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles.question}
      aria-labelledby="question-title"
      ref={rootRef}
      data-section="question-window"
    >
      <div className={styles.question__inner}>
        <div className={styles.question__panel} data-anim="question-panel">
          <div className={styles.question__top}>
            <h2 id="question-title">
              Спросите Думателя и получите развёрнутый, точный ответ с
              источниками.
            </h2>
            <div
              className={styles.question__status}
              aria-hidden="true"
              data-anim="question-status"
            >
              <Image
                src={withBasePath("/icons/question-wave.svg")}
                alt=""
                width={18}
                height={18}
              />
              <span>Думатель ждет вопроса...</span>
            </div>
          </div>

          <div className={styles.question__actions}>
            <div
              className={styles.question__input}
              aria-hidden="true"
              data-anim="question-input"
            >
              <Image
                src={withBasePath("/icons/question-doc.svg")}
                alt=""
                width={43}
                height={58}
              />
              <p>
                К примеру: Дай найти формулы для решения теории в конспекте.
              </p>
            </div>
            <Button
              className={styles.question__button}
              type="button"
              variant="primary"
              data-anim="question-button"
            >
              Узнать ответ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
