import type { ReactNode } from "react";

type TagOption = "div" | "section" | "main" | "header" | "footer";

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
  const classes = ["container", className].filter(Boolean).join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
