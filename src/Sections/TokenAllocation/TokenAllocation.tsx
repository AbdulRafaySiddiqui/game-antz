import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Theme, Typography } from "@mui/material";
import Bg from "src/assets/images/tokenallocationbg.png";
import Dragon from "src/assets/images/dragon.png";
import Burn from "src/assets/images/burn.png";
import { Container } from "@mui/system";
import { motion } from "framer-motion";
import useReveal from "src/hooks/useReveal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
    marginTop: 200,
    background: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  dragon: {
    position: "absolute",
    top: "-50%",
    right: 0,
    width: 300,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  leftContent: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    justifyContent: "space-evenly",
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  rightContent: {
    display: "flex",
    flexFlow: "column",
    height: "100%",
    justifyContent: "space-evenly",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

interface Props {}

const TokenAllocation: React.FC<Props> = () => {
  const classes = useStyles();
  const { ref, container, item2, control } = useReveal();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" style={{ position: "relative" }}>
        <img src={Dragon} alt="" className={classes.dragon} />
        <Typography align="center" variant="h4" className="thin">
          TOKEN
        </Typography>
        <Typography align="center" variant="h3">
          ALLOCATION
        </Typography>
        <Typography color="primary" variant="h6" align="center" style={{ marginTop: 50 }}>
          Total Supply (1Q – 100%): 1 Quadrillion
        </Typography>
        <Grid
          ref={ref}
          variants={container}
          animate={control}
          component={motion.div}
          container
          spacing={2}
          columns={13}
          style={{ marginTop: 20 }}
        >
          <Grid item variants={item2} component={motion.div} xs={13} sm={13} md={5}>
            <div className={classes.leftContent}>
              <Typography variant="h6">Private Sale Vested*(8,5%): 85 Trillions</Typography>
              <Typography variant="h6" color="primary">
                Presale (29%): 290 Trillions
              </Typography>
              <Typography variant="h6">PancakeSwap (31%): 310 Trillions</Typography>
            </div>
          </Grid>
          <Grid item variants={item2} component={motion.div} xs={13} sm={13} md={3}>
            <img src={Burn} alt="" width="100%" height="100%" style={{ objectFit: "contain", maxHeight: 300 }} />
          </Grid>
          <Grid item variants={item2} component={motion.div} xs={13} sm={13} md={5}>
            <div className={classes.rightContent}>
              <Typography variant="h6">Team and Development (1%): 10 Trillions</Typography>
              <Typography variant="h6" color="primary">
                Marketing (0,5%): 5 Trillions
              </Typography>
              <Typography variant="h6">Staking + CEX (5%): 50 Trillions</Typography>
            </div>
          </Grid>
        </Grid>
        <Typography color="primary" variant="h6" align="center" style={{ marginTop: 20 }}>
          BURNT (25%): 250 Trillions
        </Typography>
      </Container>
    </div>
  );
};

export default TokenAllocation;
