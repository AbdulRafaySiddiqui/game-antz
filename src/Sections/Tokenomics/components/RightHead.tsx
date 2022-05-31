import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  heading: {
    fontWeight: 300,
  },
  para: {
    fontFamily: theme.fonts[0],
  },
}));

interface Props {}

const RightHead: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.heading}>
        GAMEANTZ
      </Typography>
      <Typography variant="h3">TOKENOMICS</Typography>
      <Typography variant="h6" className={classes.para}>
        Please understand that GameAntz Project relies on two different non-crypto and crypto parts. Even though DEX
        traders are not required to download our app, interact with dAPP in any way or join any tournament, different
        tokenomics will apply.
      </Typography>
    </div>
  );
};

export default RightHead;
