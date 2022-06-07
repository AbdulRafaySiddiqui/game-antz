import React from "react";
import { Container, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Bg from "src/assets/images/footerbg.png";
import Logo from "src/assets/logos/logo.png";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    maxHeight: 10000,
    backgroundImage: `url(${Bg})`,
    backgroundSize: "auto 100%",
    backgroundPositionX: "left",
    backgroundPositionY: "bottom",
    backgroundRepeat: "no-repeat",
    paddingBottom: 50,
    paddingTop: "10vh",
    [theme.breakpoints.down("sm")]: {
      backgroundPositionX: "center",
    },
  },
  iconsContainer: {
    display: "flex",
    gap: 20,
    marginTop: 16,
  },
}));

interface Props {}

const Footer: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div style={{ marginLeft: "auto", width: "max-content", paddingRight: 10 }}>
          <img src={Logo} alt="" height="80px" />
          <Typography style={{ marginTop: 10 }}>Connect to our colony</Typography>
          <div className={classes.iconsContainer}>
            <TelegramIcon color="primary" />
            <TwitterIcon color="primary" />
            <EmailIcon color="primary" />
          </div>

          <Typography style={{ marginTop: 40, opacity: 0.8 }}>© 2022 Gameantz. All Rights Reserved.</Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
