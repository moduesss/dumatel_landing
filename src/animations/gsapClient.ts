import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initGsap = () => {
  if (typeof window === "undefined") {
    return;
  }

  const hasScrollTrigger = Boolean(
    (gsap.plugins as Record<string, unknown>).ScrollTrigger
  );

  if (!hasScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
};
