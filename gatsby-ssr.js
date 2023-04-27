import React from "react";
import Layout from "./src/components/Layout";
import { FavouritesProvider } from "./src/FavouritesContext";

// Styles
import "./src/styles/index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

// Logs when the client route changes
// export const onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// };

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// Wraps every page in a component
export const wrapRootElement = ({ element, props }) => {
  return (
    <>
      <FavouritesProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Layout>{element}</Layout>
        </ThemeProvider>
      </FavouritesProvider>
    </>
  );
};
