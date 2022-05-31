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
  description: string;
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
        <Typography style={{ opacity: 0.5 }}>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const data = [
  {
    title: "What is GameAntz?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How is this possible?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How does it work (more details)",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Why do i need GameAntz Token?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "I am not a good player so... How can i profit just from holding GameAntz?",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];
