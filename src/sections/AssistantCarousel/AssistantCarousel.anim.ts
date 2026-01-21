import { gsap } from "gsap";
import { prefersReducedMotion, revealOnScroll, setVisibleImmediately } from "@/animations";

const getHeadingTargets = (root: HTMLElement): Element[] => {
  const heading = root.querySelector("h2");
  if (!heading) {
    return [];
  }

  const targets: Element[] = [heading];
  const next = heading.nextElementSibling;

  if (next && next.tagName === "P") {
    targets.push(next);
  }

  return targets;
};

export function setupAssistantCarouselAnimations(root: HTMLElement): () => void {
  const targets = getHeadingTargets(root);

  if (prefersReducedMotion()) {
    setVisibleImmediately(targets);
    return () => {};
  }

  const ctx = gsap.context(() => {
    if (targets.length) {
      revealOnScroll(targets);
    }
  }, root);

  return () => ctx.revert();
}
