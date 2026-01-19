import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles["site-header"]} role="banner">
      <div className={styles["site-header__pill"]}>
        <div className={styles["site-header__brand"]}>
          <Image
            src="/icons/Group 298956478.svg"
            alt="Думатель"
            width={204}
            height={44}
            priority
          />
          <span className={styles["site-header__beta"]}>бета</span>
        </div>
        <nav
          className={styles["site-header__nav"]}
          aria-label="Основная навигация"
        >
          <a className={styles["site-header__nav-item"]} href="#product">
            О продукте
          </a>
          <a className={styles["site-header__nav-item"]} href="#audience">
            Кому подходит
          </a>
          <a className={styles["site-header__nav-item"]} href="#pricing">
            Тарифы
          </a>
          <a className={styles["site-header__nav-item"]} href="#usage">
            Форма использования
          </a>
        </nav>
        <div className={styles["site-header__contacts"]}>
          <a className={styles["site-header__phone"]} href="tel:+74992860004">
            +7 (499) 286-00-04
          </a>
          <a className={styles["site-header__email"]} href="mailto:info@dumatel.ru">
            <Image
              src="/icons/Email.svg"
              alt="Email"
              width={16}
              height={16}
            />
            <span>info@dumatel.ru</span>
          </a>
        </div>
        <a className={styles["site-header__cta"]} href="https://app.dumatel.ru/">
          Попробовать сейчас
        </a>
      </div>
    </header>
  );
}
