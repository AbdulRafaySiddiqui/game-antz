import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Theme, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Gold from "src/assets/images/nfts/goldliutenant.png";
import Purple from "src/assets/images/nfts/purplecolonel.png";
import Red from "src/assets/images/nfts/demonheartgeneral.png";
import Green from "src/assets/images/nfts/omicrongeneral.png";
import NFTCard from "./components/NFTCard";
import { motion } from "framer-motion";
import useReveal from "src/hooks/useReveal";
import Reveal from "src/components/Reveal/Reveal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 50,
  },
  para: {
    fontFamily: theme.fonts[0],
    fontWeight: 300,
    marginTop: 20,
  },
  card: {},
}));

interface Props {}

const NFTPrizes: React.FC<Props> = () => {
  const classes = useStyles();
  const { container, control, ref, item } = useReveal();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h4" className="thin">
          IN-DAPP
        </Typography>
        <Typography align="center" variant="h3">
          NFT PRIZES
        </Typography>
        <Reveal>
          <Typography align="center" variant="h6" className={classes.para}>
            Even if you're not the best player, several NFT lay "hidden" within our dApp and they will be fairly awarded
            to any participating wallets at certain random blocks. All GameAntz NFT are created attending to official
            U.S. ARMY ranks. Some of those NFT will feature a guaranteed buy back price in BNB whilst all of them will
            be stackable and/or tradable in our marketplace or any other NFT marketplace we partner with. The guaranteed
            buy back is determined by the APY stake multiplier associated to its rarity. Here we offer a skeak peek to
            some of them. Good gaming!
          </Typography>
        </Reveal>
        <Grid
          ref={ref}
          component={motion.div}
          variants={container}
          animate={control}
          container
          spacing={{ xs: 1, sm: 1, md: 4 }}
          style={{ marginTop: 50 }}
        >
          {data.map((ele, i) => (
            <Grid component={motion.div} variants={item} key={i} item xs={6} sm={4} md={3}>
              <NFTCard {...ele} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default NFTPrizes;

const data = [
  {
    image: Gold,
    title: "Gold Liutenant",
    rarity: "Rare",
    multiplier: "X5",
    buyBackValue: "5 BNB",
  },
  {
    image: Purple,
    title: "Purple Colonel",
    rarity: "Uncommon",
    multiplier: "X3",
    buyBackValue: "3 BNB",
  },
  {
    image: Red,
    title: "Demon Heart General",
    rarity: "Legendary",
    multiplier: "X15",
    buyBackValue: "15 BNB",
  },
  {
    image: Green,
    title: "Omicron General",
    rarity: "Epic",
    multiplier: "X8",
    buyBackValue: "8 BNB",
  },
];
