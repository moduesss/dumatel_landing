import Image from "next/image";
import styles from "./QuestionWindow.module.scss";

export default function QuestionWindow() {
  return (
    <section className={styles.question} aria-labelledby="question-title">
      <div className={styles.question__inner}>
        <div className={styles.question__panel}>
          <div className={styles.question__top}>
            <h2 id="question-title">
              Спросите Думателя и получите развёрнутый, точный ответ с
              источниками.
            </h2>
            <div className={styles.question__status} aria-hidden="true">
              <Image
                src="/icons/question-wave.svg"
                alt=""
                width={18}
                height={18}
              />
              <span>Думатель ждет вопроса...</span>
            </div>
          </div>

          <div className={styles.question__actions}>
            <div className={styles.question__input} aria-hidden="true">
              <Image
                src="/icons/question-doc.svg"
                alt=""
                width={43}
                height={58}
              />
              <p>
                К примеру: Дай найти формулы для решения теории в конспекте.
              </p>
            </div>
            <button className={styles.question__button} type="button">
              Узнать ответ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
