import type { SectionTitleProps } from "@/types/ui";
import styles from "./SectionTitle.module.scss";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignClass =
    align === "center" ? styles["section-title--center"] : "";

  return (
    <div className={[styles["section-title"], alignClass].filter(Boolean).join(" ")}>
      {eyebrow ? (
        <p className={styles["section-title__eyebrow"]}>{eyebrow}</p>
      ) : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
