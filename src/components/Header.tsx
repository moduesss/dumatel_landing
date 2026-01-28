"use client"; // CHANGE: нужен state для меню

import { useEffect, useState } from "react"; // CHANGE
import Image from "next/image";
import { withBasePath } from "@/lib/paths";
import Button from "@/components/Button";
import buttonStyles from "@/components/Button.module.scss";
import styles from "./Header.module.scss";

const NAV_LINKS = [
  { href: "#product", label: "О продукте" },
  { href: "#audience", label: "Кому подходит" },
  { href: "#pricing", label: "Тарифы" },
  { href: "#usage", label: "Форма использования" },
  { href: "/blog", label: "Блог" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // CHANGE
  const dialogId = "mobile-menu"; // CHANGE: стабильный id для SSR/CSR

  const close = () => setIsOpen(false); // CHANGE
  const toggle = () => setIsOpen((v) => !v); // CHANGE

  // CHANGE: закрытие по Esc + запрет скролла страницы
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  // CHANGE: клик по пункту меню закрывает оверлей
  const onNavClick = () => close();

  return (
    <>
      <header className={styles["site-header"]} role="banner">
        <div className={styles["site-header__pill"]}>
          <div className={styles["site-header__brand"]}>
            <Image
              src={withBasePath("/icons/Group 298956478.svg")}
              alt="Думатель"
              width={204}
              height={44}
              priority
            />
            <span className={styles["site-header__beta"]}>бета</span>
          </div>

          {/* Desktop blocks */}
          <nav
            className={styles["site-header__nav"]}
            aria-label="Основная навигация"
          >
            {NAV_LINKS.map((l) => (
              <a key={l.href} className={styles["site-header__nav-item"]} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles["site-header__contacts"]}>
            <a className={styles["site-header__phone"]} href="tel:+74992860004">
              +7 (499) 286-00-04
            </a>
            <a className={styles["site-header__email"]} href="mailto:info@dumatel.ru">
              <Image
                src={withBasePath("/icons/Email.svg")}
                alt="Email"
                width={16}
                height={16}
              />
              <span>info@dumatel.ru</span>
            </a>
          </div>

          <a
            className={[
              buttonStyles.button,
              buttonStyles["button--primary"],
              buttonStyles["button--md"],
              styles["site-header__cta"],
            ].join(" ")}
            href="https://app.dumatel.ru/"
          >
            Попробовать сейчас
          </a>

          {/* CHANGE: Burger (показывается только <1440px через CSS) */}
          <Button
            className={styles["site-header__burger"]}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            aria-controls={dialogId}
            onClick={toggle}
          >
            <span className={styles["burger-lines"]} aria-hidden="true" />
          </Button>
        </div>
      </header>

      {/* CHANGE: Overlay + side panel */}
      <div
        className={`${styles["mobile-menu"]} ${isOpen ? styles["mobile-menu--open"] : ""}`}
        id={dialogId}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
        onClick={close} // клик по бэкдропу закрывает
      >
        {/* CHANGE: stop propagation so click inside panel doesn't close */}
        <div
          className={styles["mobile-menu__panel"]}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles["mobile-menu__header"]}>
            <span className={styles["mobile-menu__title"]}>Меню</span>
            <Button
              className={styles["mobile-menu__close"]}
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Закрыть меню"
              onClick={close}
            >
              ✕
            </Button>
          </div>

          <nav className={styles["mobile-menu__nav"]} aria-label="Навигация">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                className={styles["mobile-menu__link"]}
                href={l.href}
                onClick={onNavClick}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles["mobile-menu__contacts"]}>
            <a className={styles["mobile-menu__phone"]} href="tel:+74992860004">
              +7 (499) 286-00-04
            </a>
            <a className={styles["mobile-menu__email"]} href="mailto:info@dumatel.ru">
              <Image
                src={withBasePath("/icons/Email.svg")}
                alt="Email"
                width={16}
                height={16}
              />
              <span>info@dumatel.ru</span>
            </a>
          </div>
          <div className={styles["site-header__cta"]}>
            <Button variant="primary" size="md" href="https://app.dumatel.ru/">
              Попробовать сейчас
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
