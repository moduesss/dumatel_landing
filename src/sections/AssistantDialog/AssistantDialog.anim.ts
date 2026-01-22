import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

export function setupAssistantDialogAnimations(root: HTMLElement): () => void {
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
    const header = q('[data-anim="ad-header"]');
    const body = q('[data-anim="ad-body"]');
    const voice = q('[data-anim="ad-voice"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
      },
    });

    tl.from(header, {
      y: 18,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .from(
        body,
        {
          y: 18,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "+=0.1"
      )
      .set(voice, { transformOrigin: "50% 50%" })
      .to(voice, {
        scale: 1.08,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(voice, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
  }, root);

  return () => ctx.revert();
}
