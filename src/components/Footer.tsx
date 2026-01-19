import Link from "next/link";
import Container from "@/components/Container";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles["site-footer"]}>
      <Container>
        <div className={styles["site-footer__inner"]}>
          <p>© {year} Dumatel. All rights reserved.</p>
          <nav className={styles["site-footer__nav"]} aria-label="Footer">
            <Link href="/">Privacy</Link>
            <Link href="/">Terms</Link>
            <Link href="/">Contact</Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
