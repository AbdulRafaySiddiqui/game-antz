import React, { useRef } from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Head from "src/Sections/Head/Head";
import GroupImage from "src/Sections/GroupImage/GroupImage";
import WelcomeText from "src/Sections/WelcomeText/WelcomeText";
import About from "src/Sections/About/About";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // height: "1000vh",
  },
}));

interface Props {}

const Home: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="home">
      <Head />
      <GroupImage />
      <WelcomeText />
      <About />
    </div>
  );
};

export default Home;
