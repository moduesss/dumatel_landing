import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupQuestionWindowAnimations(root: HTMLElement): () => void {
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
    const panel = q('[data-anim="question-panel"]');
    const status = q('[data-anim="question-status"]');
    const input = q('[data-anim="question-input"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
      },
    });

    tl.from(panel, {
      y: 24,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(status, {
        y: 16,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(input, {
        y: 16,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      });
  }, root);

  return () => {
    ctx.revert();
  };
}
