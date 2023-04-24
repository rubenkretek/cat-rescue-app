import React from "react";

//Components
import Header from "./header";
import Footer from "./footer";

import Container from "@mui/material/Container";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 3, mb: 3 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
