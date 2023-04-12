import React from "react";

//Components
import Header from "./header";
import Footer from "./footer";

// Styles
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "../styles/index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}
