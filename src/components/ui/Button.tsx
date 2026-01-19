import type {
  AnchorHTMLAttributes,
  ComponentPropsWithoutRef,
  ReactNode,
} from "react";
import styles from "./Button.module.scss";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, styles[`button--${variant}`], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...rest}>
      {children}
    </button>
  );
}
