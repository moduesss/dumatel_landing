/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./PricingPlans.module.scss";

const freeFeatures = [
  "400 кредитов",
  "Ограниченная загрузка файлов",
  "Загрузка только PDF форматов",
  "Поиск в сети",
  "Замедленная индексация файлов",
];

const proFeatures = [
  "5000 кредитов в месяц",
  "Расширенные форматы документов (PDF, DOX, TXT)",
  "Ускоренная индексация документов",
  "Генерация артефактов (документов и отчётов)",
  "Веб-Агент",
  "Поиск в сети",
  "Голосовой ввод",
  "Генерация MindMap",
  "Поддержка",
];

export default function PricingPlans() {
  return (
    <section className={styles["pricing-plans"]} aria-labelledby="pricing-title">
      <div className={styles["pricing-plans__inner"]}>
        <header className={styles["pricing-plans__heading"]}>
          <h2 id="pricing-title">
            Организуйте свои ресурсы, общение и сотрудничество по конкретной
            теме, создав специальное пространство.
          </h2>
        </header>

        <div
          className={styles["pricing-plans__toggle"]}
          role="tablist"
          aria-label="Период оплаты"
        >
          <button
            className={[
              styles["pricing-plans__toggle-button"],
              styles["pricing-plans__toggle-button--active"],
            ].join(" ")}
            type="button"
            role="tab"
            aria-selected="true"
          >
            Месячный план
          </button>
          <button
            className={styles["pricing-plans__toggle-button"]}
            type="button"
            role="tab"
            aria-selected="false"
          >
            Годовой план -30%
          </button>
        </div>

        <div className={styles["pricing-plans__device"]}>
          <div className={styles["pricing-plans__screen"]}>
            <div className={styles["pricing-plans__bg"]} aria-hidden="true">
              <img
                className={styles["pricing-plans__bg-left"]}
                src="/icons/ipad_background_logo.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <img
                className={styles["pricing-plans__bg-right"]}
                src="/icons/ipad_background_logo.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={styles["pricing-plans__camera"]}>
              <Image
                src="/icons/Ellipse 1743.svg"
                alt=""
                width={12}
                height={12}
              />
            </div>

            <div className={styles["pricing-plans__status"]}>
              <div className={styles["pricing-plans__status-left"]}>
                <Image
                  src="/icons/Group 298956452.svg"
                  alt="Думатель"
                  width={28}
                  height={28}
                />
                <span>12:00</span>
              </div>
              <div className={styles["pricing-plans__status-right"]}>
                <span>100%</span>
                <span
                  className={styles["pricing-plans__battery"]}
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="pricing-plans__cards">
              <article className="plan-card plan-card--free">
                <div className="plan-card__header">
                  <h3>Бесплатный</h3>
                  <span className="plan-card__pill">1 чел.</span>
                </div>

                <div className="plan-card__intro">
                  <p>
                    <span className="plan-card__arrow">→</span> Повысьте
                    эффективность с базовым доступом и попробуйте всю полноту
                    функционала Думателя.
                  </p>
                </div>

                <ul className="plan-card__features">
                  {freeFeatures.map((feature) => (
                    <li key={feature}>
                      <Image
                        src="/icons/Vector-18.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="plan-card__footer">
                  <p className="plan-card__notice">Ограниченный функционал</p>
                  <a className="plan-card__cta plan-card__cta--dark" href="https://app.dumatel.ru/">
                    Попробовать бесплатно
                  </a>
                </div>
              </article>

              <article className="plan-card plan-card--pro">
                <div className="plan-card__header">
                  <div className="plan-card__title">
                    <span className="plan-card__badge">PRO</span>
                    <h3>Профи</h3>
                  </div>
                  <span className="plan-card__pill">1 чел.</span>
                </div>

                <div className="plan-card__intro">
                  <p>
                    <span className="plan-card__arrow">→</span> Раскройте полные
                    возможности Думателя с расширенными функциями.
                  </p>
                </div>

                <ul className="plan-card__features">
                  {proFeatures.map((feature) => (
                    <li key={feature}>
                      <Image
                        src="/icons/Vector-18.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="plan-card__footer">
                  <div className="plan-card__price">
                    <span className="plan-card__sale">
                      <span className="plan-card__sale-accent">-30%</span> на год
                    </span>
                    <div className="plan-card__amount">
                      <span className="plan-card__old">2590 ₽</span>
                      <span className="plan-card__current">1 900 ₽</span>
                    </div>
                  </div>

                  <a
                    className="plan-card__cta plan-card__cta--accent"
                    href="https://app.dumatel.ru/"
                  >
                    Подключиться сейчас
                  </a>
                </div>
              </article>
            </div>

            <div className="pricing-plans__home-indicator" aria-hidden="true" />
          </div>
        </div>

        <p className="pricing-plans__note">
          Внимание: При выборе любого из тарифов, за исключением бесплатного, вы
          соглашаетесь с офертой и пользовательским соглашением.
        </p>
      </div>
    </section>
  );
}
