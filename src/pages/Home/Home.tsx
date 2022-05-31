import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Head from "src/Sections/Head/Head";
import GroupImage from "src/Sections/GroupImage/GroupImage";
import WelcomeText from "src/Sections/WelcomeText/WelcomeText";
import About from "src/Sections/About/About";
import Trailer from "src/Sections/Trailer/Trailer";
import Tokenomics from "src/Sections/Tokenomics/Tokenomics";
import TokenAllocation from "src/Sections/TokenAllocation/TokenAllocation";
import Roadmap from "src/Sections/Roadmap/Roadmap";

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
      <Trailer />
      <Tokenomics />
      <TokenAllocation />
      <Roadmap />
    </div>
  );
};

export default Home;
