import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/paths";
import styles from "./Footer.module.scss";
import Button from "./Button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footer__inner}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <Image
              src={withBasePath("/icons/Group 298956478.svg")}
              alt="Думатель"
              width={180}
              height={33}
            />
            <span className={styles.footer__beta}>бета</span>
          </div>

          <div className={styles.footer__actions}>
            <div className={styles.footer__social} aria-label="Социальные сети">
              <Link
                href="https://t.me"
                aria-label="Телеграм Думателя"
                className={styles.footer__socialLink}
              >
                <Image
                  src={withBasePath("/icons/social-tg.svg")}
                  alt="Телеграм"
                  width={45}
                  height={45}
                />
              </Link>
              <Link
                href="https://vk.com"
                aria-label="ВКонтакте Думателя"
                className={styles.footer__socialLink}
              >
                <Image
                  src={withBasePath("/icons/social-vk.svg")}
                  alt="ВКонтакте"
                  width={45}
                  height={45}
                />
              </Link>
              <Link
                href="https://max.ru"
                aria-label="MAX Думателя"
                className={styles.footer__socialLink}
              >
                <Image
                  src={withBasePath("/icons/social-max.svg")}
                  alt="MAX"
                  width={45}
                  height={45}
                />
              </Link>
            </div>

            <Button variant="primary" href="https://app.dumatel.ru">
              Начать бесплатно
            </Button>
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
              src={withBasePath("/icons/studio-rika.svg")}
              alt="Студия Рика"
              width={30}
              height={21}
            />
            <span>Design by Студия Рика</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
