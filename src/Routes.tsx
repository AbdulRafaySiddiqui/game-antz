import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Home from "src/pages/Home/Home";
import Navbar from "src/components/Navbar/Navbar";
import Footer from "src/components/Footer/Footer";
import NotFound from "src/pages/NotFound/NotFound";
import { Container } from "@mui/material";

interface Props {}

const Routes: React.FC<Props> = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "min-content 1fr min-content",
        background: "#181728",
      }}
    >
      <Container maxWidth="xl">
        <Navbar />
      </Container>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Routes;
