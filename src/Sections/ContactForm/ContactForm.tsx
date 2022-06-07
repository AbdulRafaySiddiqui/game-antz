import React from "react";
import { makeStyles } from "@mui/styles";
import { Container, Grid, TextField, Theme, Typography, Button } from "@mui/material";
import Suke from "src/assets/images/suke.png";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
  },
}));

interface Props {}

const ContactForm: React.FC<Props> = () => {
  const classes = useStyles();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    console.log(e);
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={8}>
              <Typography variant="h4" className="thin">
                WANT TO TALK
              </Typography>
              <Typography variant="h3">GET IN TOUCH</Typography>
              <Grid container spacing={3} style={{ marginTop: 20 }}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" required variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" type="email" required variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Subject" required variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" multiline rows={4} required variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" size="large">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <img src={Suke} alt="" height="100%" width="100%" style={{ objectFit: "contain" }} />
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default ContactForm;
