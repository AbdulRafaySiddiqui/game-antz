import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Theme, Typography } from "@mui/material";
import Bg from "src/assets/images/roadmapbg.png";
import Reveal from "src/components/Reveal/Reveal";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 60,
    paddingBottom: 60,
    background: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    backgroundColor: theme.palette.primary.dark,
    backgroundBlendMode: "color-dodge",
    backgroundAttachment: "fixed",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr min-content 1fr",
    gap: 25,
    marginTop: 50,
    [theme.breakpoints.down("sm")]: {
      gap: 10,
    },
  },
  line: {
    background: theme.palette.primary.main,
    width: 4,
    height: "100%",
  },
  leftCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  rightCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  rightContent: {
    marginTop: 200,
  },
  date: {
    background: theme.palette.primary.main,
    borderRadius: 5,
    fontFamily: theme.fonts[0],
    width: "max-content",
    padding: "3px 12px",
  },
  textLine: {
    fontFamily: theme.fonts[0],
    fontWeight: 300,
    // lineHeight: 2,
    fontSize: 20,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
    },
  },
}));

interface Props {}

const Roadmap: React.FC<Props> = () => {
  const classes = useStyles();
  const left = data.filter((_, i) => i % 2 === 0);
  const right = data.filter((_, i) => i % 2 === 1);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography align="center" variant="h4" className="thin">
          ROADMAP
        </Typography>
        <Reveal>
          <Typography align="center" variant="h3">
            STRATEGY & PROJECTED
            <br /> GROWTH PLAN
          </Typography>
        </Reveal>
        <div className={classes.grid}>
          {/* Left roadmap */}
          <div>
            {left.map((item, i) => (
              <Reveal key={i}>
                <div className={classes.leftCard}>
                  <Typography variant="h5" className={classes.date}>
                    {item.date}
                  </Typography>
                  <Typography className={classes.title}>{item.title}</Typography>
                  {item.lines.map((ele, ind) => (
                    <Typography key={ind} className={classes.textLine}>
                      {ele}
                    </Typography>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          {/* center line */}
          <div className={classes.line}></div>
          {/* Right roadmap */}
          <div className={classes.rightContent}>
            {right.map((item, i) => (
              <Reveal key={i}>
                <div className={classes.rightCard}>
                  <Typography variant="h5" className={classes.date}>
                    {item.date}
                  </Typography>
                  <Typography className={classes.title}>{item.title}</Typography>
                  {item.lines.map((ele, ind) => (
                    <Typography key={ind} className={classes.textLine}>
                      {ele}
                    </Typography>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Roadmap;

const data = [
  {
    date: "Oct 2018",
    title: "Official Project Birth",
    lines: [
      "Concept Creation",
      "Team Assemble",
      "Research and Insights",
      "APP Development Start",
      "3rd party API usage",
    ],
  },
  {
    date: "Jul 2019",
    title: "New Heights",
    lines: [
      "APP Updates",
      "Online profiling",
      "Initial Investment Round",
      "('non crypto investors)",
      "New Team Members",
      "Own API Development Start",
    ],
  },
  {
    date: "Nov 2021",
    title: "We go Crypto",
    lines: [
      "Smart Contract Design",
      "dAPP implementation",
      "Thoroughly Testings",
      "Initial Supported MMORPG",
      "Heavy Project Update",
    ],
  },
  {
    date: "May 2022",
    title: "Utilities Deployment",
    lines: [
      "CMC Training",
      "Initial Partnerships",
      "DexTools Mkt + Trending",
      "SMM Pro Marketing",
      "Staking Full Audit",
      "First GANTZ Staking Pools",
    ],
  },
  {
    date: "Apr 2022",
    title: "Presale + Launch",
    lines: [
      "Contract Deployment",
      "Smart Marketing",
      "Exclusive AMAs",
      "Sweepwidget + Contests",
      "Audit + KYC",
      "Presale (2 TWL + public)",
      "PancakeSwap Launch",
    ],
  },
  {
    date: "Mar 2022",
    title: "Kickstarting...",
    lines: [
      "Website Launch",
      "Twitter Launch",
      "Telegram Launch",
      "Team Expansion",
      "Private Sale",
      "('see allocation and vesting)",
    ],
  },
  {
    date: "Jun 2022",
    title: "Steady Growth",
    lines: [
      "Anti-Cheat AI Update",
      "dApp Full Audit",
      "Pro Gamers Onboarding",
      "Pro Streamers Onboarding",
      "*Initial ERC-721 NFT Minting",
      "Bridge to Polygon (MATIC)",
      "Streaming Partnership",
      "100 Testers Phase I",
    ],
  },
  {
    date: "July 2022",
    title: "Approaching Moon",
    lines: [
      "In-dapp NFT rewards system",
      "GANTZSWAP Audit + Release",
      "NFT Marketplace & Partnerships",
      "First NFT Staking Pools*",
      "*(GANTZ Rewards)",
      "Gaming dApp Release (V1)",
      "Gaming Magazines Adverts",
    ],
  },
  {
    date: "Oct 2022",
    title: "Consolidation",
    lines: [
      "Professional Team Sponsorship",
      "TV Ads Campaign",
      "Android & IOS Version",
      "Additional Tokens Partnerships",
      "Additional Tokens Integration",
      "First GameAntz Live Event",
    ],
  },
];
