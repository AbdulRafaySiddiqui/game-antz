import React from "react";
import { useAnimation, motion, TargetAndTransition, VariantLabels } from "framer-motion";
import { IntersectionOptions, useInView } from "react-intersection-observer";

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const item2 = {
  hidden: { y: 20, opacity: 0, scale: 0 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: "-100%" },
  visible: { opacity: 1, x: 0 },
};
const slideLeft = {
  hidden: { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0 },
};
const slideTop = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: 0 },
};
const slideBottom = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: 0 },
};

const useReveal = function (options?: IntersectionOptions) {
  const [ref, inView] = useInView(options);
  const control = useAnimation();

  React.useEffect(() => {
    control.start(inView ? "visible" : "hidden");
  }, [inView, control]);

  return { ref, inView, control, item, container, item2, motion, slideRight, slideLeft, slideTop, slideBottom };
};

export default useReveal;
