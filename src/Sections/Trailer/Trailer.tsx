import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import { Container } from "@mui/system";
import FrameLeft from "src/assets/images/frameleft.png";
import FrameRight from "src/assets/images/frameright.png";
import FrameBottom from "src/assets/images/framebottom.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: 100,
  },
  para: {
    fontFamily: theme.fonts[0],
    fontWeight: 300,
    maxWidth: 500,
    margin: "auto",
    marginBottom: 30,
  },
  frameContainer: {
    aspectRatio: " 16 / 9 ",
    position: "relative",
    width: "100%",
  },
  frameLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "50px",
  },
  frameRight: {
    height: "50px",
    position: "absolute",
    top: 0,
    right: 0,
  },
  frameBottom: {
    height: "50px",
    position: "absolute",
    bottom: "-30px",
    left: "calc(50% - 200px)",
  },
}));

interface Props {}

const Trailer: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography variant="h6" align="center" className={classes.para}>
          We understand some might not get the GameAntz concept in full… this is just a tiny teaser that speaks for
          itself. But there’s a whole lot more coming…
        </Typography>
        <div className={classes.frameContainer}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/DWcJFNfaw9c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <img src={FrameLeft} alt="" className={classes.frameLeft} />
          <img src={FrameRight} alt="" className={classes.frameRight} />
          <img src={FrameBottom} alt="" className={classes.frameBottom} />
        </div>
      </Container>
    </div>
  );
};

export default Trailer;
