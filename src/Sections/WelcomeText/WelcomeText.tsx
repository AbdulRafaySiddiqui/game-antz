import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import useReveal from "src/hooks/useReveal";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "-40vh",
  },
  mainHeading: {
    fontSize: 200,
    fontFamily: theme.fonts[0],
    opacity: 0.3,
    [theme.breakpoints.down("md")]: {
      fontSize: 130,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 50,
    },
  },
  text: {
    fontFamily: theme.fonts[0],
    marginTop: -110,
    maxWidth: 600,
    margin: "auto",
    letterSpacing: 7,
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      marginTop: -80,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: -10,
    },
  },
}));

interface Props {}

const WelcomeText: React.FC<Props> = () => {
  const classes = useStyles();
  const { ref, item, control } = useReveal();

  return (
    <div className={classes.root}>
      <Typography align="center" className={classes.mainHeading} color="primary">
        Welcome
      </Typography>
      <motion.div animate={control} ref={ref} variants={item}>
        <Typography align="center" className={classes.text}>
          Welcome to the first DeFi project with its own fully functional MMORPG dAPP. Play in your own private room and
          win 85% of the Prize Pool in GameAntz Tokens (tradable in full once claimed to your connected wallet).
        </Typography>
      </motion.div>
    </div>
  );
};

export default WelcomeText;
