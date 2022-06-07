import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Theme, Typography } from "@mui/material";
import Bg from "src/assets/images/rainbow.png";
import Knife from "src/assets/images/knife.png";
import Whitepaper from "src/assets/images/whitepaper.png";
import useReveal from "src/hooks/useReveal";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Reveal from "src/components/Reveal/Reveal";
import DevTools from "../DevTools/DevTools";
import ContactForm from "../ContactForm/ContactForm";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundImage: `url(${Bg})`,
    backgroundSize: "100% 100%",
    paddingTop: 100,
  },
  para: {
    marginTop: "1rem",
    fontWeight: 200,
    maxWidth: 300,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    display: "block",
    fontSize: "1.4rem",
    marginTop: "1.5rem",
    "& span": {
      textDecoration: "underline",
    },
  },
  arrow: {
    transform: "rotate(-45deg) translateY(3px) translateX(-6px)",
  },
}));

interface Props {}

const Documents: React.FC<Props> = () => {
  const classes = useStyles();
  const { motion, ref, control, slideRight } = useReveal();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <motion.img
          ref={ref}
          animate={control}
          transition={{ duration: 0.6, type: "spring" }}
          variants={slideRight}
          src={Knife}
          alt=""
          height="60px"
        />
        <Reveal>
          <Grid container spacing={3} style={{ marginBottom: 100 }}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="h4" style={{ paddingTop: 35 }} className="thin">
                WE ARE
              </Typography>
              <Typography variant="h3" style={{ paddingTop: 5 }}>
                DOUBLE AUDITED
                <br />
                AND TRIPLE DOXX
              </Typography>
              <Typography variant="h6" style={{ paddingTop: 10 }} className={classes.para}>
                Take a look at our documents and download our Whitepaper
              </Typography>
              <a className={classes.link} href="#" target={"_blank"}>
                <span>RateTech Audit (PinkSale Partner)</span>{" "}
                <ArrowForwardIcon fontSize="small" className={classes.arrow} />
              </a>
              <a className={classes.link} href="#" target={"_blank"}>
                <span>Full KYC/DOXX Completed</span> <ArrowForwardIcon fontSize="small" className={classes.arrow} />
              </a>
              <a className={classes.link} href="#" target={"_blank"}>
                <span>Project Whitepaper V2</span> <ArrowForwardIcon fontSize="small" className={classes.arrow} />
              </a>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Reveal>
                <img src={Whitepaper} width="100%" height="100%" alt="" style={{ objectFit: "contain" }} />
              </Reveal>
            </Grid>
          </Grid>
        </Reveal>
      </Container>
      <DevTools />
      <ContactForm />
    </div>
  );
};

export default Documents;
