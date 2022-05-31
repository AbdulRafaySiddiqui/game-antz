import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Theme, Typography } from "@mui/material";
import AboutContainer from "./component/AboutContainer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "10vh",
  },
  heading: {
    fontWeight: 200,
    textAlign: "center",
  },
  heading2: {
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 30,
  },
}));

interface Props {}

const About: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" className={classes.heading}>
          ABOUT
        </Typography>
        <Typography variant="h3" className={classes.heading2}>
          GAMEANTZ
        </Typography>

        <AboutContainer />
      </Container>
    </div>
  );
};

export default About;
