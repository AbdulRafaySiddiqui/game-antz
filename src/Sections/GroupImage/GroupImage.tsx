import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Theme } from "@mui/material";
import Group from "src/assets/images/group.png";
import { motion, useAnimation } from "framer-motion";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  img: {
    width: "100%",
  },
}));

interface Props {}

const GroupImage: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className="center">
        <motion.img
          initial={{ scale: 0, opacity: 0, y: 0 }}
          animate={{ scale: 1, opacity: 1, y: "-40vh" }}
          transition={{ delay: 1, duration: 1 }}
          src={Group}
          alt=""
          className={classes.img}
        />
      </div>
    </Container>
  );
};

export default GroupImage;
