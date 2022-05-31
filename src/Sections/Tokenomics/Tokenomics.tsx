import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Theme, Typography } from "@mui/material";
import Ring from "src/assets/images/ring.png";
import { Container } from "@mui/system";
import RightHead from "./components/RightHead";
import { motion } from "framer-motion";
import useReveal from "src/hooks/useReveal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  font: {
    fontFamily: theme.fonts[0],
  },
}));

interface Props {}

const Tokenomics: React.FC<Props> = () => {
  const classes = useStyles();
  const { container, control, item, ref } = useReveal();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid ref={ref} animate={control} variants={container} component={motion.div} container spacing={2}>
          {/* Image */}
          <Grid component={motion.div} item variants={item} xs={12} sm={6} md={4}>
            <img src={Ring} alt="" width="100%" />
          </Grid>
          {/* Image Right heading and content */}
          <Grid component={motion.div} item variants={item} xs={12} sm={6} md={8} container spacing={2}>
            {/* Heading Main and description */}
            <Grid component={motion.div} item variants={item} xs={12}>
              <RightHead />
            </Grid>
            {/* Right content Left one */}
            <Grid component={motion.div} item variants={item} xs={12} sm={12} md={6}>
              <Typography color="primary" variant="h5">
                Dex Trading Tokenomics
              </Typography>
              <Typography variant="h6" className="thin" style={{ marginTop: 10 }}>
                *Small gas fees apply when trading through Pancakeswap and said fees experience variations attending to
                several conditions. We do not control those fees.
              </Typography>
            </Grid>
            {/* Right content Right one */}
            <Grid component={motion.div} item variants={item} xs={12} sm={12} md={6}>
              <Typography color="primary" variant="h5">
                IN-dAPP Tokenomics
              </Typography>
              <Typography variant="h6" className="thin" style={{ marginTop: 10 }}>
                *Small gas fees apply when creating or joining a mission as well as to perform the "CLAIM" of pooled
                prize in tokens.
              </Typography>
            </Grid>
          </Grid>
          {/* Below image Left */}
          <Grid component={motion.div} item variants={item} xs={12} sm={6}>
            <Typography color="primary" variant="h5">
              7% Buy/Sell Tax
            </Typography>
            <div style={{ display: "flex", gap: 20 }}>
              <Typography variant="h6">
                5%
                <br />
                Marketing
              </Typography>
              <Typography variant="h6">
                2%
                <br />
                Gaming dApp Fee
              </Typography>
            </div>
          </Grid>
          {/* Below image Right */}
          <Grid component={motion.div} item variants={item} xs={12} sm={6}>
            <Typography color="primary" variant="h5">
              15% Prize Claim Tax
            </Typography>
            <div style={{ display: "flex", gap: 20 }}>
              <Typography variant="h6">
                3%
                <br />
                Marketing
              </Typography>
              <Typography variant="h6">
                2%
                <br />
                Buy Back
              </Typography>
              <Typography variant="h6">
                10%
                <br />
                Infrastucture
                <br /> Operational Costs
              </Typography>
            </div>
          </Grid>
          {/* End para */}
          <Grid component={motion.div} item variants={item} xs={12}>
            <Typography className={classes.font} variant="h6">
              *Buy/Sell tax will be gradually reduced to 0% as soon as Testers Phase I starts. This is a way of saying
              "You are most welcome to buy our token and embark on this journey". Oh, gamers will love that too. A 7%
              Trasfer Tax is in place except when you transfer to Gaming dApp address for battling or when transferring
              back to your wallet from the Gaming dApp. Again, you don´t need to worry about this restriction when
              claiming your tokens from dApp.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Tokenomics;
