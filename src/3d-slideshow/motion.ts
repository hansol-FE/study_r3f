import { Variants } from "framer-motion";

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerVariants: Variants = {
  animate: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
};

export const fadeUpVariants: Variants = {
  initial: {
    opacity: 0,
    y: 25,
    transition: { duration: 1, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: defaultEasing },
    willChange: "opacity, transform",
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: { duration: 1, ease: defaultEasing },
    willChange: "opacity, transform",
  },
};
