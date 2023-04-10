import React from "react";

//Components
import Header from "./header";
import Footer from "./footer";

// Styles
import "../styles/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
