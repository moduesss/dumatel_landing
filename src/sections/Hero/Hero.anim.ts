import { gsap } from "gsap";
import { prefersReducedMotion, revealOnScroll, setVisibleImmediately } from "@/animations";

const getRevealTargets = (root: HTMLElement): Element[] =>
  Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));

export function setupHeroAnimations(root: HTMLElement): () => void {
  const targets = getRevealTargets(root);

  if (prefersReducedMotion()) {
    setVisibleImmediately(targets);
    return () => {};
  }

  const ctx = gsap.context(() => {
    if (targets.length) {
      revealOnScroll(targets, { y: 32 });
    }
  }, root);

  return () => ctx.revert();
}
