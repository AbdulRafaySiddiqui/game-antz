import React from "react";
import { useAnimation } from "framer-motion";
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

const useReveal = function (options?: IntersectionOptions) {
  const [ref, inView] = useInView(options);
  const control = useAnimation();

  React.useEffect(() => {
    control.start(inView ? "visible" : "hidden");
  }, [inView, control]);

  return { ref, inView, control, item, container, item2 };
};

export default useReveal;
