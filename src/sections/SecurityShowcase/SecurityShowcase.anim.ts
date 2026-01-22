import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupSecurityShowcaseAnimations(root: HTMLElement): () => void {
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
    const header = q('[data-anim="security-header"]');
    const cards = q('[data-anim="security-card"]');
    const badge = q('[data-anim="security-badge"]');

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
      .from(cards, {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      })
      .from(
        badge,
        {
          y: 10,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.2"
      );
  }, root);

  return () => ctx.revert();
}
