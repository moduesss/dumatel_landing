import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupAssistantCarouselAnimations(root: HTMLElement): () => void {
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
    const title = q('[data-anim="ac-title"]');
    const controls = q('[data-anim="ac-controls"]');
    const viewport = q('[data-anim="ac-viewport"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
      },
    });

    tl.from(title, {
      y: 24,
      autoAlpha: 0,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.1,
    })
      .from(controls, {
        autoAlpha: 0,
        duration: 0.4,
        ease: "power3.out",
      })
      .from(viewport, {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
      });
  }, root);

  return () => ctx.revert();
}

export function animateAssistantCarouselActive(
  root: HTMLElement,
  activeIndex: number
): void {
  if (typeof window === "undefined") {
    return;
  }

  initGsap();

  const cards = Array.from(
    root.querySelectorAll<HTMLElement>('[data-anim="ac-card"]')
  );
  const card = cards[activeIndex];

  if (!card) {
    return;
  }

  const content = card?.querySelector<HTMLElement>('[data-anim="ac-content"]');
  const video = card?.querySelector<HTMLElement>('[data-anim="ac-video"]');

  const targets = [content, video].filter(
    (target): target is HTMLElement => Boolean(target)
  );

  if (!targets.length) {
    return;
  }

  if (prefersReducedMotion()) {
    gsap.set(targets, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
    });
    return;
  }

  gsap.killTweensOf(targets);

  if (content) {
    gsap.fromTo(
      content,
      { autoAlpha: 0, y: 10 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.22,
        ease: "power2.out",
      }
    );
  }

  if (video) {
    gsap.fromTo(
      video,
      { autoAlpha: 0.9, scale: 1.02 },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  }
}
