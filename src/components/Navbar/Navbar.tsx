import React from "react";
import { Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "src/assets/logos/logo.png";
import BurgerMenu from "src/components/BurgerMenu/BurgerMenu";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { scrollTo } from "src/utils";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "min-content 1fr max-content",
    // height: 70,
    alignItems: "center",
    justifyItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    [theme.breakpoints.down("md")]: {
      paddingRight: 25,
    },
  },
  hideSmDown: {
    display: "flex",
    gap: 10,
    width: "100%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  link: {
    cursor: "pointer",
    borderBottom: "2px transparent solid",
    "&:hover": {
      borderBottom: "2px black solid",
    },
  },

  hideMdUp: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  launchBtn: {
    [theme.breakpoints.down("lg")]: {
      width: 120,
      padding: "6px 2px",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  logo: {
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
      height: "60%",
    },
  },
}));

interface Props {}

const links = [
  ["About", "/", "about"],
  ["Stage", "/", "stage"],
  ["Tokenomics", "/", "tokenomics"],
  ["Docs", "/", "docs"],
  ["Roadmap", "/", "roadmap"],
  ["NFTs", "/", "nfts"],
  ["Tech", "/", "tech"],
  ["Games", "/", "games"],
  ["Contact", "/", "contact"],
];

const Navbar: React.FC<Props> = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const linkClicked = (url: string, id = "") => {
    if (id) {
      scrollTo(id);
      return;
    }
    url[0] === "/" ? navigate(url) : window.open(url, "_blank");
  };

  const handleLaunchClick = () => {
    window.open("https://app.gameantz.com/", "_blank");
  };

  return (
    <div className={classes.root}>
      <img height="80%" src={Logo} alt="" onClick={() => linkClicked("/")} className={classes.logo} />

      <div className={classes.hideSmDown}>
        {links.map(([name, link, id], index) => (
          <Typography key={index} onClick={() => linkClicked(link, id)} className={clsx(classes.link)}>
            {name}
          </Typography>
        ))}
      </div>
      <Button variant="outlined" color="secondary" className={classes.launchBtn} onClick={handleLaunchClick}>
        Launch Dapp
      </Button>
      <div className={classes.hideMdUp}>
        <BurgerMenu links={links} />
      </div>
    </div>
  );
};

export default Navbar;
