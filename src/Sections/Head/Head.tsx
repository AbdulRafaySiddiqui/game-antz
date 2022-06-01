import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import Curtain from "src/assets/images/curtain.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: `url(${Curtain})`,
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundPositionY: "60px",
    backgroundAttachment: "fixed",
    height: "100vh",
    maxHeight: 2160,
    paddingTop: "min(30vh, 280px)",
  },
  hed1: {
    fontFamily: theme.fonts[0],
    letterSpacing: 10,
    fontWeight: 300,
    marginBottom: 10,
  },
  hed2: {
    fontFamily: theme.fonts[0],
    letterSpacing: 2,
    fontWeight: 600,
    marginBottom: 10,
  },
}));

interface Props {}

const item = {
  hidden: { y: 20, opacity: 0 },
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

const Head: React.FC<Props> = () => {
  const classes = useStyles();
  const [ref, inView] = useInView();
  const control = useAnimation();

  React.useEffect(() => {
    control.start(inView ? "visible" : "hidden");
  }, [inView]);

  return (
    <div className={classes.root}>
      <motion.div ref={ref} initial="hidden" animate={control} variants={container}>
        <motion.div variants={item}>
          <Typography align="center" variant="h3" className={classes.hed1}>
            IMAGINE PLAYING YOUR
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Typography align="center" variant="h2" className={classes.hed2}>
            FAVORITE GAME
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Typography align="center" variant="h3" className={classes.hed1}>
            AND GETTING REWARDED IN
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Typography align="center" variant="h2" className={classes.hed2}>
            CRYPTO
          </Typography>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Head;
