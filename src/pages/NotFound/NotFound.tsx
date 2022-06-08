import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { AnimatePresence, motion } from "framer-motion";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexFlow: "column",
  },
  div: {
    // width: 200,
    // height: 180,
    background: "green",
    borderRadius: 10,
    fontSize: 100,
  },
}));

interface Props {}

const NotFound: React.FC<Props> = () => {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className={classes.root}>
      <Typography variant="h1" align="center">
        404
      </Typography>

      <motion.div
        layout
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
        className={classes.div}
        style={{ width: count * 100 }}
      >
        {count}
      </motion.div>
      <AnimatePresence>
        <motion.div layout style={{ background: "cyan" }}>
          {toggle && (
            <motion.h2 layout key={"text"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sunt cumque architecto, libero fuga,
              modi vitae aliquid provident facilis, minima animi debitis mollitia corporis sapiente atque magni commodi
              amet? Quaerat.
            </motion.h2>
          )}
        </motion.div>
      </AnimatePresence>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
        click me {count}
      </Button>
      <Button variant="contained" color="primary" onClick={() => setToggle(!toggle)}>
        TOggle
      </Button>
      <div style={{ height: "100vh" }} />
      <motion.div
        whileInView={{ scrollSnapAlign: "start", scale: 0.6, msScrollSnapY: "start" }}
        style={{ height: 200, width: "100%", background: "red" }}
      ></motion.div>
      <div style={{ height: "100vh" }} />
    </div>
  );
};

export default NotFound;
