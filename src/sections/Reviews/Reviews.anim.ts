import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupReviewsAnimations(root: HTMLElement): () => void {
  initGsap();

  const allTargets = root.querySelectorAll<HTMLElement>("[data-anim]");

  if (prefersReducedMotion()) {
    gsap.set(allTargets, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
    });
    return () => {};
  }

  const ctx = gsap.context((self) => {
    const q = self.selector as gsap.utils.SelectorFunc;
    const heading = q('[data-anim="reviews-heading"]');
    const cards = q('[data-anim="rv-card"]');
    const visibleCards = cards.slice(0, 3);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
      },
    });

    tl.from(heading, {
      y: 24,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
    }).from(
      visibleCards,
      {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      },
      "-=0.2"
    );
  }, root);

  return () => ctx.revert();
}

export function animateReviewsEntering(
  root: HTMLElement,
  index: number,
  visibleCount: number = 3
): void {
  if (typeof window === "undefined") {
    return;
  }

  initGsap();

  const cards = Array.from(
    root.querySelectorAll<HTMLElement>('[data-anim="rv-card"]')
  );
  const enteringIndex = index + (visibleCount - 1);
  const enteringCard = cards[enteringIndex];

  if (!enteringCard) {
    return;
  }

  const title = enteringCard.querySelector<HTMLElement>(
    '[data-anim="rv-title"]'
  );
  const quote = enteringCard.querySelector<HTMLElement>(
    '[data-anim="rv-quote"]'
  );
  const author = enteringCard.querySelector<HTMLElement>(
    '[data-anim="rv-author"]'
  );
  const targets = [title, quote, author].filter(
    (target): target is HTMLElement => Boolean(target)
  );

  if (!targets.length) {
    return;
  }

  gsap.killTweensOf(targets);
  gsap.set(targets, { autoAlpha: 1, y: 0 });

  if (prefersReducedMotion()) {
    return;
  }

  gsap.fromTo(
    targets,
    { autoAlpha: 0, y: 10 },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.22,
      ease: "power2.out",
      stagger: 0.05,
    }
  );
}
