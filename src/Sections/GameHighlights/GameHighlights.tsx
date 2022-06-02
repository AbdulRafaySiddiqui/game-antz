import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Theme } from "@mui/material";
import Bg1 from "src/assets/images/highlights.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: -100,
    backgroundColor: theme.palette.primary.dark,
    background: `url(${Bg1})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "center",
    backgroundBlendMode: "screen",
    height: 1000,
  },
}));

interface Props {}

const GameHighlights: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="xl"></Container>
    </div>
  );
};

export default GameHighlights;
