import type { ReactNode } from "react";
import styles from "./Container.module.scss";

type TagOption = "div" | "section" | "main" | "header" | "footer" | "article";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: TagOption;
};

export default function Container({
  children,
  className,
  as = "div",
}: ContainerProps) {
  const Tag = as;
  const classes = [styles.container, className].filter(Boolean).join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
