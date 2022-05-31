import { IntersectionOptions } from "react-intersection-observer";
import useReveal from "src/hooks/useReveal";
import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  options?: IntersectionOptions;
}

const Reveal: React.FC<RevealProps> = ({ children, options }) => {
  const { ref, control, item } = useReveal({ ...options });

  return (
    <motion.div ref={ref} animate={control} variants={item}>
      {children}
    </motion.div>
  );
};

export default Reveal;
