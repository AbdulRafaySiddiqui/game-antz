import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AnimatePresence,
  AnimationControls,
  DragHandlers,
  motion,
  useMotionValue,
  useTransform,
  VariantLabels,
  TargetAndTransition,
} from "framer-motion";
import Gif404 from "src/assets/images/404.gif";
import { MakeCustomValueType, Transition } from "framer-motion/types/types";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 200,
    flexFlow: "column",
  },
  div: {
    // width: 200,
    // height: 180,
    background: "green",
    borderRadius: 10,
    fontSize: 100,
  },
  divBorder: {
    width: 300,
    height: 200,
    border: "2px solid red",
    position: "relative",
    "&:after": {
      position: "absolute",
      top: 0,
      // left: 0,
      content: "''",
      height: 30,
      width: 30,
      backgroundColor: "green",
      left: "0%",
    },
  },
  img: {
    filter: "invert(1)",
    mixBlendMode: "lighten",
  },
}));

interface Props {}

const images = [
  "https://2.bp.blogspot.com/-14-PfrVNpNs/XKUOPjkV2xI/AAAAAAAADpw/8Nsey-wz4y8wryqwXLCE1ndvqwV03dNcwCLcBGAs/s1600/Ram_V.jpg",
  "https://www.spacemanproject.com/assets/arxius/7b1918a4eec0317e9a0b0baf40b802f4.jpg",
  "https://www.spacemanproject.com/assets/arxius/9f065c011bf279668a8e78ac9a0e851c.jpg",
  "https://miro.medium.com/max/1400/1*sWeGQ-h6VGZY9vjDs7X2Ww.jpeg",
  "https://i.pinimg.com/originals/c0/77/94/c07794d73989e4f4147deae8cb43bc87.jpg",
];

const NotFound: React.FC<Props> = () => {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const [exitX, setExitX] = React.useState<string | number>("100%");

  const handleDragEnd = () => {
    setExitX(-250);
    setIndex(index + 1);
  };

  return (
    <div className={classes.root}>
      <img src={Gif404} alt="" className={classes.img} />
      {/* <motion.div style={{ width: 400, height: 600, position: "relative" }}>
        <AnimatePresence initial={false}>
          <Card
            key={index + 2}
            // @ts-ignore
            initial={{ scale: 0, y: 105, opacity: 0 }}
            animate={{ scale: 0.65, y: 130, opacity: 0.4 }}
            transition={{
              scale: { duration: 0.2 },
              opacity: { duration: 0.4 },
            }}
          />
          <Card
            key={index + 1}
            // @ts-ignore
            initial={{ scale: 0, y: 105, opacity: 0 }}
            animate={{ scale: 0.8, y: 75, opacity: 0.5 }}
            transition={{
              scale: { duration: 0.2 },
              opacity: { duration: 0.4 },
            }}
          />
          <Card
            key={index}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              // @ts-ignore
              type: "spring",
              // @ts-ignore
              stiffness: 300,
              // @ts-ignore
              damping: 20,
              opacity: { duration: 0.2 },
            }}
            exitX={exitX}
            setExitX={setExitX}
            index={index}
            setIndex={setIndex}
            drag="x"
          />
        </AnimatePresence>
      </motion.div>
      <Button onClick={handleDragEnd} variant="contained" color="primary" style={{ marginTop: 100 }}>
        Do it
      </Button> */}
    </div>
  );
};

export default NotFound;

interface CardProps {
  setExitX: (val: string | number) => void;
  setIndex: (val: number) => void;
  index: number;
  initial: boolean | VariantLabels | undefined;
  drag: boolean | "x" | "y" | undefined;
  animate: boolean | VariantLabels | TargetAndTransition | AnimationControls | undefined;
  transition: Transition | undefined;
  exitX: string | number;
}

const Card: React.FC<CardProps> = (props) => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-250, 0, 250], [-45, 0, 45], {
    clamp: false,
  });

  const handleDragEnd: DragHandlers["onDragEnd"] = (event, info) => {
    if (info.offset.x < -100) {
      props.setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      props.setExitX(250);
      props.setIndex(props.index + 1);
    }
  };

  return (
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        x: x,
        rotate: rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      exit={{
        x: props.exitX,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.img
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#fff",
          backgroundImage: `url(${images[props.index % images.length]})`,
          backgroundSize: "100% 100%",
          borderRadius: 10,
          scale: scale,
        }}
      />
    </motion.div>
  );
};
