import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupPricingPlansAnimations(root: HTMLElement): () => void {
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
    const heading = q('[data-anim="pricing-heading"]');
    const toggle = q('[data-anim="pricing-toggle"]');
    const device = q('[data-anim="pricing-device"]');
    const ctas = q('[data-anim="pricing-cta"]') as HTMLElement[];

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
    })
      .from(toggle, {
        y: 16,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
      })
      .from(device, {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power3.out",
      });

    if (typeof window !== "undefined") {
      const finePointer = window.matchMedia("(pointer: fine)");
      if (finePointer.matches && ctas.length) {
        const handlers = new Map<HTMLElement, { enter: () => void; leave: () => void }>();

        ctas.forEach((cta) => {
          gsap.set(cta, { transformOrigin: "50% 50%" });

          const handleEnter = () => {
            gsap.to(cta, {
              scale: 1.02,
              duration: 0.15,
              ease: "power2.out",
            });
          };

          const handleLeave = () => {
            gsap.to(cta, {
              scale: 1,
              duration: 0.15,
              ease: "power2.out",
            });
          };

          cta.addEventListener("mouseenter", handleEnter);
          cta.addEventListener("mouseleave", handleLeave);
          handlers.set(cta, { enter: handleEnter, leave: handleLeave });
        });

        removeListeners = () => {
          handlers.forEach((handler, cta) => {
            cta.removeEventListener("mouseenter", handler.enter);
            cta.removeEventListener("mouseleave", handler.leave);
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

export function animatePricingPriceSwap(root: HTMLElement): void {
  if (typeof window === "undefined") {
    return;
  }

  initGsap();

  const price = root.querySelector<HTMLElement>('[data-anim="pricing-price"]');

  if (!price) {
    return;
  }

  if (prefersReducedMotion()) {
    gsap.set(price, {
      autoAlpha: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
    });
    return;
  }

  gsap.killTweensOf(price);
  gsap.fromTo(
    price,
    { y: 8, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 0.25,
      ease: "power3.out",
    }
  );
}
