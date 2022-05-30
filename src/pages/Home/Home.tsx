import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

interface Props {}

const Home: React.FC<Props> = () => {
  const classes = useStyles();

  return <div className={classes.root}></div>;
};

export default Home;
