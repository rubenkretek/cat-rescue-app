import React from "react";

//Components
import Header from "./header";
import Footer from "./footer";

import Box from "@mui/material/Box";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
}
