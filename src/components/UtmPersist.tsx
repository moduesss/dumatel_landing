"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

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

export default function UtmPersist() {
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const utm = getUtmFromSearchParams(
      new URLSearchParams(searchParamsString),
    );
    if (Object.keys(utm).length === 0) {
      return;
    }

    if (window.localStorage.getItem(UTM_STORAGE_KEY)) {
      return;
    }

    // Persist only the first landing utm_* values.
    window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
  }, [searchParamsString]);

  return null;
}
