import React, { useContext, useState, createContext, useEffect } from "react";
import { FavouritesProvider } from "./FavouritesContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export function ContextProvider({ children }) {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  return (
    <FavouritesProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </FavouritesProvider>
  );
}
