import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { withBasePath } from "@/lib/paths";
import styles from "./BlogHeader.module.scss";

export default function BlogHeader() {
  return (
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
          <Link href="/" className={styles.navLink}>
            Главная
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Блог
          </Link>
        </nav>

        <Button
          className={styles.cta}
          variant="primary"
          size="lg"
          href="https://app.dumatel.ru"
        >
          Попробовать сейчас
        </Button>
      </div>
    </header>
  );
}
