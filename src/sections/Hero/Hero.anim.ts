import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupHeroAnimations(root: HTMLElement): () => void {
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
    const eyebrow = q('[data-anim="hero-eyebrow"]');
    const title = q('[data-anim="hero-title"]');
    const subtitle = q('[data-anim="hero-subtitle"]');
    const dialogUser = q('[data-anim="hero-dialog-user"]');
    const dialogAssistant = q('[data-anim="hero-dialog-assistant"]');
    const cta = q('[data-anim="hero-cta"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 80%",
        once: true,
      },
    });

    tl.from(eyebrow, {
      y: 24,
      autoAlpha: 0,
      duration: 0.3,
      ease: "power3.out",
    })
      .from(title, {
        y: 24,
        autoAlpha: 0,
        duration: 0.4,
        ease: "power3.out",
      })
      .from(subtitle, {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      })
      .from(dialogUser, {
        x: -20,
        autoAlpha: 0,
        scale: 0.98,
        duration: 0.6,
        ease: "power3.out",
      })
      .from(
        dialogAssistant,
        {
          x: 20,
          autoAlpha: 0,
          scale: 0.98,
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.15"
      )
      .from(
        cta,
        {
          y: 16,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        "+=0.2"
      );
  }, root);

  return () => ctx.revert();
}
