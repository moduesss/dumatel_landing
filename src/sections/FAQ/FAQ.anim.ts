import { gsap } from "gsap";
import { initGsap, prefersReducedMotion } from "@/animations";

const previousIndexMap = new WeakMap<HTMLElement, number>();

export function setupFAQAnimations(root: HTMLElement): () => void {
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
    const aside = q('[data-anim="faq-aside"]');
    const items = q('[data-anim="faq-item"]');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top 85%",
      },
    });

    tl.from(aside, {
      y: 24,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
    }).from(items, {
      y: 24,
      autoAlpha: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.08,
    });

  }, root);

  return () => ctx.revert();
}

export function animateFaqAccordion(
  root: HTMLElement,
  activeIndex: number
): void {
  if (typeof window === "undefined") {
    return;
  }

  initGsap();

  const items = Array.from(
    root.querySelectorAll<HTMLElement>('[data-anim="faq-item"]')
  );

  if (!items.length) {
    return;
  }

  const previousIndex = previousIndexMap.get(root) ?? -1;
  previousIndexMap.set(root, activeIndex);

  const getItemByIndex = (index: number) =>
    items.find((item) => item.dataset.index === String(index));

  const closeItem = (item: HTMLElement | undefined) => {
    if (!item) {
      return;
    }

    const content = item.querySelector<HTMLElement>('[data-anim="faq-content"]');
    const icon = item.querySelector<HTMLElement>('[data-anim="faq-icon"]');

    if (!content) {
      return;
    }

    gsap.killTweensOf([content, icon]);

    if (prefersReducedMotion()) {
      gsap.set(content, { height: 0, autoAlpha: 0 });
      if (icon) {
        gsap.set(icon, { rotate: 0 });
      }
      return;
    }

    gsap.to(content, {
      height: 0,
      autoAlpha: 0,
      duration: 0.25,
      ease: "power2.out",
    });

    if (icon) {
      gsap.to(icon, {
        rotate: 0,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  };

  const openItem = (item: HTMLElement | undefined) => {
    if (!item) {
      return;
    }

    const content = item.querySelector<HTMLElement>('[data-anim="faq-content"]');
    const icon = item.querySelector<HTMLElement>('[data-anim="faq-icon"]');

    if (!content) {
      return;
    }

    gsap.killTweensOf([content, icon]);
    gsap.set(content, { overflow: "hidden" });

    if (prefersReducedMotion()) {
      gsap.set(content, { height: "auto", autoAlpha: 1 });
      if (icon) {
        gsap.set(icon, { rotate: 90 });
      }
      return;
    }

    gsap.fromTo(
      content,
      { height: 0, autoAlpha: 0 },
      {
        height: "auto",
        autoAlpha: 1,
        duration: 0.35,
        ease: "power2.out",
      }
    );

    if (icon) {
      gsap.to(icon, {
        rotate: 90,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  };

  if (previousIndex !== activeIndex) {
    closeItem(getItemByIndex(previousIndex));
  }

  if (activeIndex >= 0) {
    openItem(getItemByIndex(activeIndex));
  }
}
