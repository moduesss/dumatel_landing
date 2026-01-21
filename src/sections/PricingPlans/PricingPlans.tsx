"use client";

/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import Button from "@/components/Button";
import { setupPricingPlansAnimations } from "./PricingPlans.anim";
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
  const rootRef = useRef<HTMLElement | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "yearly",
  );
  const isYearly = billingCycle === "yearly";
  const pricing = isYearly
    ? { current: "15 960 ₽", old: "22 800 ₽" }
    : { current: "1 900 ₽", old: "2 590 ₽" };

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupPricingPlansAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles["pricing-plans"]}
      aria-labelledby="pricing-title"
      id="pricing"
      ref={rootRef}
    >
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
          data-cycle={billingCycle}
        >
          <Button
            className={[
              styles["pricing-plans__toggle-button"],
              !isYearly ? styles["pricing-plans__toggle-button--active"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            variant="ghost"
            role="tab"
            aria-selected={!isYearly}
            onClick={() => setBillingCycle("monthly")}
          >
            Месячный план
          </Button>
          <Button
            className={[
              styles["pricing-plans__toggle-button"],
              isYearly ? styles["pricing-plans__toggle-button--active"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
            type="button"
            variant="ghost"
            role="tab"
            aria-selected={isYearly}
            onClick={() => setBillingCycle("yearly")}
          >
            Годовой план -30%
          </Button>
        </div>

        <div className={styles["pricing-plans__device"]}>
          <div className={styles["pricing-plans__screen"]}>
            <div className={styles["pricing-plans__bg"]} aria-hidden="true">
              <img
                className={styles["pricing-plans__bg-left"]}
                src={withBasePath("/icons/ipad_background_logo.svg")}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <img
                className={styles["pricing-plans__bg-right"]}
                src={withBasePath("/icons/ipad_background_logo.svg")}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className={styles["pricing-plans__camera"]}>
              <Image
                src={withBasePath("/icons/Ellipse 1743.svg")}
                alt=""
                width={12}
                height={12}
              />
            </div>

            <div className={styles["pricing-plans__status"]}>
              <div className={styles["pricing-plans__status-left"]}>
                <Image
                  src={withBasePath("/icons/Group 298956452.svg")}
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

            <div className={styles["pricing-plans__cards"]}>
              <article className={styles["plan-card"]}>
                <div className={styles["plan-card__header"]}>
                  <h3>Бесплатный</h3>
                  <span className={styles["plan-card__pill"]}>1 чел.</span>
                </div>

                <div className={styles["plan-card__intro"]}>
                  <p>
                    <span className={styles["plan-card__arrow"]}>→</span>{" "}
                    Повысьте
                    эффективность с базовым доступом и попробуйте всю полноту
                    функционала Думателя.
                  </p>
                </div>

                <ul className={styles["plan-card__features"]}>
                  {freeFeatures.map((feature) => (
                    <li key={feature}>
                      <Image
                        src={withBasePath("/icons/Vector-18.svg")}
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles["plan-card__footer"]}>
                  <p className={styles["plan-card__notice"]}>
                    Ограниченный функционал
                  </p>
                  <a
                    className={[
                      styles["plan-card__cta"],
                      styles["plan-card__cta--dark"],
                    ].join(" ")}
                    href="https://app.dumatel.ru/"
                  >
                    Попробовать бесплатно
                  </a>
                </div>
              </article>

              <article className={styles["plan-card"]}>
                <div className={styles["plan-card__header"]}>
                  <div className={styles["plan-card__title"]}>
                    <span className={styles["plan-card__badge"]}>PRO</span>
                    <h3>Профи</h3>
                  </div>
                  <span className={styles["plan-card__pill"]}>1 чел.</span>
                </div>

                <div className={styles["plan-card__intro"]}>
                  <p>
                    <span className={styles["plan-card__arrow"]}>→</span>{" "}
                    Раскройте полные
                    возможности Думателя с расширенными функциями.
                  </p>
                </div>

                <ul className={styles["plan-card__features"]}>
                  {proFeatures.map((feature) => (
                    <li key={feature}>
                      <Image
                        src={withBasePath("/icons/Vector-18.svg")}
                        alt=""
                        width={16}
                        height={16}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles["plan-card__footer"]}>
                  <div
                    className={styles["plan-card__price"]}
                    key={billingCycle}
                  >
                    <span className={styles["plan-card__sale"]}>
                      {isYearly ? (
                        <>
                          <span className={styles["plan-card__sale-accent"]}>
                            -30%
                          </span>{" "}
                          на год
                        </>
                      ) : (
                        "В месяц"
                      )}
                    </span>
                    <div className={styles["plan-card__amount"]}>
                      <span className={styles["plan-card__old"]}>
                        {pricing.old}
                      </span>
                      <span className={styles["plan-card__current"]}>
                        {pricing.current}
                      </span>
                    </div>
                  </div>

                  <a
                    className={[
                      styles["plan-card__cta"],
                      styles["plan-card__cta--accent"],
                    ].join(" ")}
                    href="https://app.dumatel.ru/"
                  >
                    Подключиться сейчас
                  </a>
                </div>
              </article>
            </div>

            <div
              className={styles["pricing-plans__home-indicator"]}
              aria-hidden="true"
            />
          </div>
        </div>

        <p className={styles["pricing-plans__note"]}>
          Внимание: При выборе любого из тарифов, за исключением бесплатного, вы
          соглашаетесь с офертой и пользовательским соглашением.
        </p>
      </div>
    </section>
  );
}
