import { gsap } from "gsap";
import { initGsap } from "./gsapClient";

type RevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
};

type RevealTargets = Element | Element[] | string;

const normalizeTargets = (targets: RevealTargets): Element[] => {
  const elements =
    typeof targets === "string"
      ? (gsap.utils.toArray(targets) as Element[])
      : Array.isArray(targets)
        ? targets
        : [targets];

  return elements.filter((element): element is Element => Boolean(element));
};

export const revealOnScroll = (
  targets: RevealTargets,
  options: RevealOptions = {}
): gsap.core.Tween[] => {
  if (typeof window === "undefined") {
    return [];
  }

  initGsap();

  const elements = normalizeTargets(targets);

  return elements.map((element) =>
    gsap.fromTo(
      element,
      { autoAlpha: 0, y: options.y ?? 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: options.duration ?? 0.8,
        delay: options.delay ?? 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      }
    )
  );
};

export const setVisibleImmediately = (targets: RevealTargets): void => {
  if (typeof window === "undefined") {
    return;
  }

  initGsap();

  const elements = normalizeTargets(targets);

  if (!elements.length) {
    return;
  }

  gsap.set(elements, { autoAlpha: 1, clearProps: "transform" });
};
