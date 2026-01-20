import Image from "next/image";
import type { CSSProperties } from "react";
import { withBasePath } from "@/lib/paths";
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
  const sectionStyle: CSSProperties = {
    "--security-dots-url": `url(${withBasePath("/icons/formats-dots.svg")})`,
  };

  return (
    <section
      className={styles.security}
      aria-labelledby="security-title"
      style={sectionStyle}
    >
      {/* CHANGE: фон на всю ширину секции, а max-width держим внутри */}
      <div className={styles.security__inner}>
        <div className={styles.security__content}>
          <header className={styles.security__header}>
            <h2 id="security-title">Безопасность данных. Полный контроль.</h2>
            <p>Думатель работает по корпоративным стандартам защиты.</p>
          </header>

          <div className={styles.security__grid}>
            {items.map((item) => (
              <article key={item.title} className={styles.security__card}>
                <div className={styles.security__icon}>
                  <Image
                    src={withBasePath(item.icon)}
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>

                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* CHANGE: устройство = 2 слоя: живой экран + рамка SVG */}
        <div className={styles.security__device} aria-hidden="true">
          {/* CHANGE: живой экран (под рамкой) */}
          <div className={styles.security__screen}>
            <span className={styles.security__camera} aria-hidden="true" />

            <div className={styles.security__badge}>
              <span className={styles.security__badgeIcon}>W</span>
              <span>Wildcard SSL.</span>
            </div>
          </div>

          {/* CHANGE: рамка поверх экрана */}
          <Image
            src={withBasePath("/icons/Mac frame.svg")}
            alt=""
            width={748}
            height={750}
            priority
            className={styles.security__frame}
          />
        </div>
      </div>
    </section>
  );
}
