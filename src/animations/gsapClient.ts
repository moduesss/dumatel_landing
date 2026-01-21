import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isInitialized = false;

export const initGsap = () => {
  if (typeof window === "undefined" || isInitialized) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  isInitialized = true;
};
