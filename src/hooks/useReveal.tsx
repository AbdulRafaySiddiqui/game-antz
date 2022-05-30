import React from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const item = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
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

const useReveal = function <T>() {
  const [ref, inView] = useInView();
  const control = useAnimation();

  React.useEffect(() => {
    control.start(inView ? "visible" : "hidden");
  }, [inView]);

  return { ref, inView, control, item, container };
};

export default useReveal;
