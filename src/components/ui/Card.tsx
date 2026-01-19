import type { CardProps } from "@/types/ui";
import styles from "./Card.module.scss";

export default function Card({ className, ...rest }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");
  return <div className={classes} {...rest} />;
}
