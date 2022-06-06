import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Theme, Typography } from "@mui/material";
import Bg1 from "src/assets/images/highlights.png";
import CSGO from "src/assets/images/games/csgo.png";
import GTA5 from "src/assets/images/games/gta5.png";
import LOL from "src/assets/images/games/lol.png";
import Valorant from "src/assets/images/games/valorant.png";
import Logo from "src/assets/logos/logo.png";
import Reveal from "src/components/Reveal/Reveal";
import useReveal from "src/hooks/useReveal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: -100,
    paddingTop: 400,
    backgroundColor: theme.palette.primary.dark,
    background: `url(${Bg1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "center",
    backgroundBlendMode: "screen",
  },
  text: {
    fontFamily: theme.fonts[0],
    fontWeight: 300,
  },
}));

interface Props {}

const GameHighlights: React.FC<Props> = () => {
  const classes = useStyles();
  const { container, control, item, ref, motion, hoverimg } = useReveal();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h4" className="thin" align="center">
          GAMES HIGHLIGHTS
        </Typography>
        <Reveal>
          <Typography variant="h3" align="center">
            CURRENTLY SUPPORTED GAMES
          </Typography>
        </Reveal>
        <Grid
          component={motion.div}
          variants={container}
          animate={control}
          ref={ref}
          container
          spacing={2}
          columns={20}
          style={{ marginTop: 30 }}
        >
          <Grid component={motion.div} variants={item} item xs={20} sm={20} md={10} lg={10}>
            <Typography className={classes.text} variant="h6">
              We are currently striving to launch our APP with full support for up to 8 games (*only Windows
              environments). However, we might release at an earlier stage at our discretion & always in the best
              interest of the project. Please be aware that every game features its own hardware requirements and those
              have nothing to do with the requirements of APP.
            </Typography>
          </Grid>
          <Grid component={motion.div} variants={item} item xs={10} sm={10} md={4}>
            <motion.img whileHover={hoverimg} transition={{ ease: "linear" }} src={CSGO} alt="" width="100%" />
          </Grid>
          <Grid component={motion.div} variants={item} item xs={10} sm={10} md={4}>
            <img src={GTA5} alt="" width="100%" />
          </Grid>
          <Grid item xs={20} sm={20} md={2}>
            {/* <div className="fill"></div> */}
          </Grid>
          <Grid component={motion.div} variants={item} item xs={20} sm={20} md={12}>
            <div className="center" style={{ justifyContent: "flex-start" }}>
              <img src={Logo} alt="" height="50px" style={{ marginRight: 10 }} />
              <Typography variant="h6">Supported</Typography>
            </div>
            <Typography className={classes.text} style={{ marginTop: 30 }} variant="h6">
              We do perform several testings before moving forward with any new game integration as well as the missions
              to be included with each one of them. Should you like to review a full list of potential games to be
              included in our APP you can always visit Overwolf API by clicking here.
            </Typography>
          </Grid>
          <Grid component={motion.div} variants={item} item xs={20} sm={10} md={4}>
            <img src={LOL} alt="" width="100%" />
          </Grid>
          <Grid component={motion.div} variants={item} item xs={20} sm={10} md={4}>
            <img src={Valorant} alt="" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GameHighlights;
