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

  let removeListeners = () => {};

  const ctx = gsap.context((self) => {
    const q = self.selector as gsap.utils.SelectorFunc;
    const panel = q('[data-anim="question-panel"]');
    const status = q('[data-anim="question-status"]');
    const input = q('[data-anim="question-input"]');
    const button = q('[data-anim="question-button"]') as HTMLElement[];

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

    if (typeof window !== "undefined") {
      const finePointer = window.matchMedia("(pointer: fine)");
      if (finePointer.matches && button.length) {
        const handlers = new Map<HTMLElement, { enter: () => void; leave: () => void }>();

        button.forEach((btn) => {
          gsap.set(btn, { transformOrigin: "50% 50%" });

          const handleEnter = () => {
            gsap.to(btn, {
              scale: 1.03,
              duration: 0.15,
              ease: "power2.out",
            });
          };

          const handleLeave = () => {
            gsap.to(btn, {
              scale: 1,
              duration: 0.15,
              ease: "power2.out",
            });
          };

          btn.addEventListener("mouseenter", handleEnter);
          btn.addEventListener("mouseleave", handleLeave);
          handlers.set(btn, { enter: handleEnter, leave: handleLeave });
        });

        removeListeners = () => {
          handlers.forEach((handler, btn) => {
            btn.removeEventListener("mouseenter", handler.enter);
            btn.removeEventListener("mouseleave", handler.leave);
          });
        };
      }
    }
  }, root);

  return () => {
    removeListeners();
    ctx.revert();
  };
}
