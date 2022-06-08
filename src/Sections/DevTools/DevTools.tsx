import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, Theme, Typography } from "@mui/material";
import AWS from "src/assets/images/tools/aws.png";
import REACT from "src/assets/images/tools/react.png";
import SOLIDITY from "src/assets/images/tools/solidity.png";
import CSHARP from "src/assets/images/tools/csharp.png";
import DOTNET from "src/assets/images/tools/dotnet.png";
import FACEIT from "src/assets/images/tools/faceit.png";
import ML from "src/assets/images/tools/ml.png";
import useReveal from "src/hooks/useReveal";
import { TargetAndTransition, VariantLabels } from "framer-motion";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  img: {
    filter: "grayscale(1)",
    opacity: 0.8,
  },
}));

interface Props {}

const hoverAnim: VariantLabels | TargetAndTransition | undefined = {
  scale: 1.2,
  opacity: 1,
  filter: "grayscale(0)",
};

const DevTools: React.FC<Props> = () => {
  const classes = useStyles();
  const { motion, container, ref, slideRight, slideLeft, control, slideTop, slideBottom } = useReveal();

  return (
    <div className={classes.root} id="tech">
      <Container maxWidth="sm">
        <Typography align="center" variant="h5" className="thin">
          TECH HIGHLIGHTS
        </Typography>
        <Typography align="center" variant="h4">
          WE PROUDLY RELY ON
        </Typography>
        <Grid
          ref={ref}
          component={motion.div}
          animate={control}
          variants={container}
          container
          spacing={4}
          style={{ marginTop: 20 }}
        >
          <Grid component={motion.div} variants={slideRight} item xs={4} sm={3}>
            <motion.img whileHover={hoverAnim} src={AWS} alt="" width="100%" className={classes.img} />
          </Grid>
          <Grid component={motion.div} variants={slideBottom} item xs={4} sm={3}>
            <motion.img whileHover={hoverAnim} src={REACT} alt="" width="100%" className={classes.img} />
          </Grid>
          <Grid component={motion.div} variants={slideBottom} item xs={4} sm={3}>
            <motion.img whileHover={hoverAnim} src={SOLIDITY} alt="" width="100%" className={classes.img} />
          </Grid>
          <Grid component={motion.div} variants={slideLeft} item xs={6} sm={3}>
            <motion.img whileHover={hoverAnim} src={CSHARP} alt="" width="90%" className={classes.img} />
          </Grid>
          <Grid component={motion.div} variants={slideRight} item xs={6} sm={4}>
            <motion.img whileHover={hoverAnim} src={DOTNET} alt="" width="100%" className={classes.img} />
          </Grid>
          <Grid component={motion.div} variants={slideTop} item xs={6} sm={4}>
            <motion.img whileHover={hoverAnim} src={FACEIT} alt="" width="100%" className={classes.img} />
          </Grid>
          <Grid component={motion.div} variants={slideTop} item xs={6} sm={4}>
            <motion.img whileHover={hoverAnim} src={ML} alt="" width="100%" className={classes.img} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DevTools;
