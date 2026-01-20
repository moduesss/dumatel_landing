import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "ghost" | "primary";
type ButtonSize = "md" | "lg" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: never;
};

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
  type?: never;
};

type Props = ButtonProps | LinkProps;

export default function Button({
  className,
  type = "button",
  variant = "ghost",
  size = "md",
  href,
  ...props
}: Props) {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button type={type} className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
