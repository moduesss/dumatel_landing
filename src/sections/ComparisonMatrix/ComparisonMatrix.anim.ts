import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupComparisonMatrixAnimations(root: HTMLElement): () => void {
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
    const header = q('[data-anim="comparison-header"]');
    const labels = q('[data-anim="comparison-label"]');
    const icons = q('[data-anim="comparison-icon"]');
    const meters = q('[data-anim="comparison-meter"]');

    gsap.set(meters, { transformOrigin: "left center" });

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
      .from(labels, {
        y: 18,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.04,
      })
      .from(icons, {
        y: 18,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.05,
      })
      .from(
        meters,
        {
          scaleX: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.02,
        },
        "-=0.2"
      );
  }, root);

  return () => ctx.revert();
}
