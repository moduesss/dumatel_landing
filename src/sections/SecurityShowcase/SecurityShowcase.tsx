"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { withBasePath } from "@/lib/paths";
import { setupSecurityShowcaseAnimations } from "./SecurityShowcase.anim";
import styles from "./SecurityShowcase.module.scss";

const items = [
  {
    title: "Ролевой доступ",
    description:
      "Гибкие права внутри команды: кто загружает, кто просматривает, кто экспортирует. Полный контроль действий пользователей.",
    icon: "/icons/security-role.svg",
  },
  {
    title: "Защищённый вход",
    description:
      "Персональные ключи доступа + двухэтапная аутентификация. Даже при утечке пароля рабочее пространство остаётся недоступным.",
    icon: "/icons/security-login.svg",
  },
  {
    title: "256-битное шифрование",
    description:
      "Все файлы шифруются при передаче и хранении. Изолированное управление ключами.",
    icon: "/icons/security-encryption.svg",
  },
  {
    title: "Локальное развёртывание",
    description:
      "On-prem и приватный контур: данные не покидают инфраструктуру компании, модели работают локально.",
    icon: "/icons/security-deploy.svg",
  },
];

export default function SecurityShowcase() {
  const rootRef = useRef<HTMLElement | null>(null);
  const sectionStyle = {
    "--security-dots-url": `url(${withBasePath("/icons/formats-dots.svg")})`,
  } as CSSProperties;

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    return setupSecurityShowcaseAnimations(rootRef.current);
  }, []);

  return (
    <section
      className={styles.security}
      aria-labelledby="security-title"
      style={sectionStyle}
      ref={rootRef}
      data-section="security-showcase"
    >
      <div className={styles.security__inner}>
        <div className={styles.security__content}>
          <header className={styles.security__header}>
            <h2 id="security-title" data-anim="security-header">
              Безопасность данных. Полный контроль.
            </h2>
            <p data-anim="security-header">
              Думатель работает по корпоративным стандартам защиты.
            </p>
          </header>

          <div className={styles.security__grid}>
            {items.map((item) => (
              <article
                key={item.title}
                className={styles.security__card}
                data-anim="security-card"
              >
                <div className={styles.security__icon}>
                  <Image
                    src={withBasePath(item.icon)}
                    alt=""
                    width={72}
                    height={72}
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.security__device} aria-hidden="true">
          {/* CHANGE: экран под рамкой — теперь позиционируется по реальным координатам SVG */}
          <div className={styles.security__screen}>
            <span className={styles.security__camera} aria-hidden="true" />
            <div className={styles.security__badge} data-anim="security-badge">
              <span className={styles.security__badgeIcon}>W</span>
              <span>Wildcard SSL.</span>
            </div>
          </div>

          {/* CHANGE: рамка всегда 100% ширины контейнера, без фиксированных px */}
          <Image
            src={withBasePath("/icons/macbook.svg")}
            alt=""
            width={1008}     // CHANGE: реальные размеры SVG (viewBox 1008x623)
            height={623}     // CHANGE
            priority
            className={styles.security__frame}
          />
        </div>
      </div>
    </section>
  );
}
