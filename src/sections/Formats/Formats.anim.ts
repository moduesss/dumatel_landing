import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupFormatsAnimations(root: HTMLElement): () => void {
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
    const title = q('[data-anim="formats-title"]');
    const cards = q('[data-anim="formats-card"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
      },
    });

    tl.from(title, {
      y: 24,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    }).from(cards, {
      y: 24,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
    });

    (cards as HTMLElement[]).forEach((card) => {
      const items = Array.from(
        card.querySelectorAll<HTMLElement>('[data-anim="formats-item"]')
      );

      if (items.length) {
        gsap.from(items, {
          y: 12,
          autoAlpha: 0,
          duration: 0.45,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      }
    });

    if (typeof window !== "undefined") {
      const finePointer = window.matchMedia("(pointer: fine)");
      if (finePointer.matches) {
        const handlers = new Map<HTMLElement, { enter: () => void; leave: () => void }>();

        (cards as HTMLElement[]).forEach((card) => {
          gsap.set(card, { transformOrigin: "50% 50%" });

          const handleEnter = () => {
            gsap.to(card, {
              y: -3,
              scale: 1.01,
              duration: 0.2,
              ease: "power2.out",
            });
          };

          const handleLeave = () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          };

          card.addEventListener("mouseenter", handleEnter);
          card.addEventListener("mouseleave", handleLeave);
          handlers.set(card, { enter: handleEnter, leave: handleLeave });
        });

        removeListeners = () => {
          handlers.forEach((handler, card) => {
            card.removeEventListener("mouseenter", handler.enter);
            card.removeEventListener("mouseleave", handler.leave);
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
