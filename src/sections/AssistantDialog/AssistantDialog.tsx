"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/paths";
import { setupAssistantDialogAnimations } from "./AssistantDialog.anim";
import styles from "./AssistantDialog.module.scss";

export default function AssistantDialog() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupAssistantDialogAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles["assistant-dialog"]}
      aria-labelledby="assistant-dialog-title"
      id="audience"
      ref={rootRef}
    >
      <div className={styles["assistant-dialog__inner"]}>
        <h2 id="assistant-dialog-title" className="visually-hidden">
          Думатель говорит
        </h2>
        <div className={styles["assistant-dialog__header"]}>
          <Image
            src={withBasePath("/icons/Dialog 7.svg")}
            alt="Думатель"
            width={64}
            height={64}
          />
          <Image
            src={withBasePath("/icons/Vector-44.svg")}
            alt="Голосовое сообщение"
            width={18}
            height={18}
          />
          <p className={styles["assistant-dialog__label"]}>Думатель говорит...</p>
        </div>
        <div className={styles["assistant-dialog__body"]}>
          <p>
            — Я превращаю хаос файлов и записей в порядок: связываю
            разрозненные данные, нахожу нужное и показываю главное. Я понимаю
            любые форматы — тексты, таблицы, изображения и даже аудио. Вместо
            длинных текстов вы сразу получаете ясный ответ.
          </p>
        </div>
      </div>
    </section>
  );
}
