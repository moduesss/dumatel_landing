import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footer__inner}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <Image
              src="/icons/Group 298956478.svg"
              alt="Думатель"
              width={202}
              height={33}
            />
            <span className={styles.footer__beta}>бета</span>
          </div>

          <div className={styles.footer__actions}>
            <div className={styles.footer__social} aria-label="Социальные сети">
              <Link href="https://t.me" aria-label="Телеграм Думателя">
                <Image
                  src="/icons/social-tg.svg"
                  alt="Телеграм"
                  width={69}
                  height={69}
                />
              </Link>
              <Link href="https://vk.com" aria-label="ВКонтакте Думателя">
                <Image
                  src="/icons/social-vk.svg"
                  alt="ВКонтакте"
                  width={69}
                  height={69}
                />
              </Link>
              <Link href="https://max.ru" aria-label="MAX Думателя">
                <Image
                  src="/icons/social-max.svg"
                  alt="MAX"
                  width={69}
                  height={69}
                />
              </Link>
            </div>

            <Link
              className={styles.footer__cta}
              href="https://app.dumatel.ru/"
            >
              Начать бесплатно
            </Link>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__meta}>
            <span>Copyrights © {year}</span>
            <span>ИНН: 52591293842 ОГРНИП: 39028392873927323</span>
            <Link href="/" className={styles.footer__policy}>
              Политика конфиденциальности
            </Link>
          </div>

          <div className={styles.footer__studio}>
            <Image
              src="/icons/studio-rika.svg"
              alt="Студия Рика"
              width={35}
              height={26}
            />
            <span>Design by Студия Рика</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
