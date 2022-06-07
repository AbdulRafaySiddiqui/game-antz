import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import Arrow from "src/assets/images/scrollarrow.png";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    bottom: 30,
    right: 30,

    cursor: "pointer",
  },
  text: {
    fontFamily: theme.fonts[0],
  },
  wrapper: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

interface Props {}

const ScrollToTop: React.FC<Props> = () => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll: (this: Window, ev: Event) => any = (e) => {
    window.scrollY > 5 ? setShow(true) : setShow(false);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          exit={{
            scale: 0,
          }}
          className={classes.root}
          onClick={handleClick}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              type: "spring",
              damping: 10,
            }}
            className={classes.wrapper}
          >
            <img src={Arrow} width="60px" alt="" />
            <Typography className={classes.text} align="center">
              Scroll up
            </Typography>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
