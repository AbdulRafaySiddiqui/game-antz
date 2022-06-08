import React from "react";
import { makeStyles } from "@mui/styles";
import { Accordion, AccordionDetails, AccordionSummary, Theme, Typography } from "@mui/material";
import Bg from "src/assets/images/aboutbg.png";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import useReveal from "src/hooks/useReveal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: `1px solid ${theme.palette.secondary.main}`,
    padding: 30,
    borderRadius: 5,
    background: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 16,
    },
  },
}));

interface Props {}
interface AccProps {
  title: string;
  description: string | JSX.Element;
}

const AboutContainer: React.FC<Props> = () => {
  const classes = useStyles();
  const { control, container, ref, item: itemVariant } = useReveal();

  return (
    <motion.div ref={ref} animate={control} variants={container} className={classes.root}>
      {data.map((item, i) => (
        <motion.div key={i} variants={itemVariant}>
          <AboutAccordian title={item.title} description={item.description} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutContainer;

const AboutAccordian: React.FC<AccProps> = ({ title, description }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<AddIcon htmlColor="white" />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={{ color: "rgba(170,170,170)" }}>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const data = [
  {
    title: "What is GameAntz?",
    description:
      "GameAntz is a newly conceptualized ecosystem joining crypto descentralized environment with a centralized MMORPG dApp allowing holders to trade in DEX/CEX and battle in private Missions for a prize in tokens (tradable in full once transferred back to wallet).",
  },
  {
    title: "How is this possible?",
    description:
      "Our APP is *initially built on the OverWolf API allowing our dapp, through each downloadable launcher, to create or join private missions in any of the supported games and keep track of certain in-game events through our connected own dapp. This simple 😉",
  },
  {
    title: "How does it work (more details)",
    description: (
      <ol>
        <li>Users need to install any of the supported games. See “Games” section (more will be added regularly).</li>
        <li>
          Users will download our APP and connect to our dapp which runs on top of each of the supported games in a
          non-intrusive way (initially only Windows environment are supported).
        </li>
        <li>
          Connected wallets will be able to join a Mission (from all available) or create a Mission (using available
          options) with their own access conditions for others to join establishing an amount in GameAntz tokens to be
          diposited prior to being able to battle and allowing from 2 to 10 players to join (we will increase this as we
          scale up).
        </li>
        <li>
          Our DAPP will communicate with our APP and track all required to completion (RtC) in-game events for that
          given Mission.
        </li>
        <li>
          The user who wins will be able to perform a “CLAIM” of 85% of the total amount of GameAntz tokens diposited
          while 15% will be used by us as per our tokenomics like a regular market sell (3% marketing, 2% LP, 10% to
          cover Operational Costs) on top of the trading volumes at a given time. *Small gas fees applies when claiming.
        </li>
        <li>
          Gamers can continue to play their game even after the previously joined Mission has ended and they can use our
          APP icon (seamlessly running on top) to join existing missions or create new ones as they play.{" "}
        </li>
      </ol>
    ),
  },
  {
    title: "Why do i need GameAntz Token?",
    description: (
      <>
        GameAntz Token is the only decentralized virtual currency that will allow to participate in the tournaments
        since we are to create not only buying/holding pressure but also bring many professional gamers into our
        project. In the near future, our own GANTZ SWAP will allow for other tokens to be accepted just this is not
        happening until GameAntz Token reaches a certain MCap.
        <br />
        <br />
        *We do understand not everyone is good at online gaming and this is why we do not encourage battling with your
        tokens since many professional players will be joining our platform making it kind of “unfair” for non pro
        players. At any stage if you run out of tokens to play you can always go and purchase more GameAntz at market
        price to be able to join new missions again. Our team is also working in establishing different levels so that a
        fair system is created. Please, be wise when joining a Mission, you will be battling only against anonymous
        wallets and will never know who is actually behind even anti-cheat measures are in place.
      </>
    ),
  },
  {
    title: "I am not a good player so... How can i profit just from holding GameAntz?",
    description:
      "Since only 1 player can win in every existing or created Mission the rest of players will always need more and more GameAntz Tokens to continue to battle or join/create new Missions. Those tokens will have to be purchased directly through Pancakeswap yet causing a continuous spike in price. The more players interacting with our platform the more tokens will be continuosly traded so, again, if you are not a good player we strongly suggest to kindly hodl and shill instead of battling with your tokens.",
  },
];
