"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
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

// Stored once on first visit; reused when URL has no utm_*.
const UTM_STORAGE_KEY = "utm_params";

const getUtmFromSearchParams = (searchParams: URLSearchParams) => {
  const utm: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    if (key.startsWith("utm_")) {
      utm[key] = value;
    }
  });
  return utm;
};

const getUtmFromStorage = () => {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = window.localStorage.getItem(UTM_STORAGE_KEY);
  if (!raw) {
    return {};
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed).filter(
        ([key, value]) => typeof key === "string" && typeof value === "string",
      ),
    ) as Record<string, string>;
  } catch {
    return {};
  }
};

const shouldSkipHref = (href: string) => {
  const lower = href.toLowerCase();
  return (
    lower.startsWith("#") ||
    lower.startsWith("mailto:") ||
    lower.startsWith("tel:") ||
    lower.startsWith("sms:") ||
    lower.startsWith("javascript:")
  );
};

const appendUtmToHref = (href: string, utm: Record<string, string>) => {
  try {
    const url = new URL(href, window.location.href);
    Object.entries(utm).forEach(([key, value]) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    if (/^(https?:)?\/\//i.test(href)) {
      return url.toString();
    }

    return `${url.pathname}${url.search}${url.hash}`;
  } catch {
    return href;
  }
};

export default function Button({
  className,
  type = "button",
  variant = "ghost",
  size = "md",
  href,
  ...props
}: Props) {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  const resolvedHref = useMemo(() => {
    if (!href) {
      return href;
    }

    // Client-only access to window/localStorage.
    if (typeof window === "undefined") {
      return href;
    }

    if (shouldSkipHref(href)) {
      return href;
    }

    const utmFromUrl = getUtmFromSearchParams(
      new URLSearchParams(searchParamsString),
    );
    const utm =
      Object.keys(utmFromUrl).length > 0 ? utmFromUrl : getUtmFromStorage();

    if (Object.keys(utm).length === 0) {
      return href;
    }

    return appendUtmToHref(href, utm);
  }, [href, searchParamsString]);

  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={resolvedHref}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return <button type={type} className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
