import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupScenariosAnimations(root: HTMLElement): () => void {
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
    const header = q('[data-anim="sc-header"]');
    const badges = q('[data-anim="sc-badge"]');
    const cards = q('[data-anim="sc-card"]');
    const docLeft = q('[data-anim="sc-doc-left"]');
    const docRight = q('[data-anim="sc-doc-right"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
      },
    });

    tl.from(header, {
      y: 24,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.1,
    })
      .from(
        badges,
        {
          y: 12,
          autoAlpha: 0,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.03,
        },
        "-=0.2"
      )
      .from(
        cards,
        {
          y: 28,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
        },
        "-=0.1"
      )
      .from(
        docLeft,
        {
          rotationZ: -3,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        docRight,
        {
          rotationZ: 3,
          duration: 0.6,
          ease: "power3.out",
        },
        "<"
      );

    if (typeof window !== "undefined") {
      const finePointer = window.matchMedia("(pointer: fine)");
      if (finePointer.matches) {
        const cardElements = cards as HTMLElement[];
        const handlers = new Map<HTMLElement, { enter: () => void; leave: () => void }>();

        cardElements.forEach((card) => {
          const handleEnter = () => {
            gsap.to(card, {
              y: -4,
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
