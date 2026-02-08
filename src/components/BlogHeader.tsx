"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { withBasePath } from "@/lib/paths";
import styles from "./BlogHeader.module.scss";

const NAV_LINKS = [
  { href: "https://dumatel.ru", label: "Главная" },
  { href: "/", label: "Блог" },
] as const;

export default function BlogHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogId = "blog-mobile-menu";

  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((v) => !v);

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

  return (
    <>
      <header className={styles.header} role="banner">
        <div className={styles.pill}>
          <Link href="/" className={styles.logo} aria-label="На главную">
            <Image
              src={withBasePath("/svg/logo_dark.svg")}
              alt="Думатель"
              width={204}
              height={44}
              priority
            />
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            ))}
          </nav>

          <Button
            className={styles.cta}
            variant="primary"
            size="lg"
            href="https://app.dumatel.ru"
          >
            Попробовать сейчас
          </Button>

          <Button
            className={styles.burger}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isOpen}
            aria-controls={dialogId}
            onClick={toggle}
          >
            <span className={styles.burgerLines} aria-hidden="true" />
          </Button>
        </div>
      </header>

      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}
        id={dialogId}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
        onClick={close}
      >
        <div
          className={styles.mobileMenuPanel}
          onClick={(event) => event.stopPropagation()}
        >
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuTitle}>Меню</span>
            <Button
              className={styles.mobileMenuClose}
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Закрыть меню"
              onClick={close}
            >
              ✕
            </Button>
          </div>

          <nav className={styles.mobileMenuNav} aria-label="Навигация">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className={styles.mobileMenuLink}
                href={link.href}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <a
              className={styles.mobileMenuLink}
              href="/privacy-policy"
              onClick={close}
            >
              Политика конфиденциальности
            </a>
          </nav>

          <div className={styles.mobileMenuContacts}>
            <a className={styles.mobileMenuPhone} href="tel:+74992860004">
              +7 (499) 286-00-04
            </a>
            <a className={styles.mobileMenuEmail} href="mailto:info@dumatel.ru">
              <Image
                src={withBasePath("/icons/Email.svg")}
                alt="Email"
                width={16}
                height={16}
              />
              <span>info@dumatel.ru</span>
            </a>
          </div>

          <div className={styles.mobileMenuCta}>
            <Button variant="primary" size="md" href="https://app.dumatel.ru">
              Попробовать сейчас
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
