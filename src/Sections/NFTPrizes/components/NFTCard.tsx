import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: 5,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: 30,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    cursor: "default",
    alignItems: "center",
    background: theme.palette.primary.dark,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  },
  img: {
    mixBlendMode: "screen",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  title: {
    color: theme.palette.primary.light,
    fontFamily: theme.fonts[0],
    fontWeight: 600,
    lineHeight: 2,
    marginBottom: 10,
  },
  attr: {
    fontFamily: theme.fonts[0],
    fontWeight: 300,
    lineHeight: 3,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
}));

interface Props {
  image: string;
  title: string;
  rarity: string;
  multiplier: string;
  buyBackValue: string;
}

const NFTCard: React.FC<Props> = ({ image, title, rarity, multiplier, buyBackValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <motion.div
      className={classes.root}
      whileHover={{
        y: -50,
        border: `3px solid ${theme.palette.primary.light}`,
        boxShadow: `0px 15px 20px -1px ${theme.palette.primary.main}`,
      }}
    >
      <img src={image} alt={title} width="100%" className={classes.img} />
      <Typography variant="h5" align="center" className={classes.title}>
        {title}
      </Typography>
      <div>
        <Typography align="center" className={classes.attr}>
          Rarity: {rarity}
        </Typography>
        <Typography align="center" className={classes.attr}>
          Staking Multiplier: {multiplier}
        </Typography>
        <Typography align="center" className={classes.attr}>
          Buyback Value: {buyBackValue}
        </Typography>
      </div>
    </motion.div>
  );
};

export default NFTCard;
