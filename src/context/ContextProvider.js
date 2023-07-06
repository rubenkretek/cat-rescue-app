import React, { useState, createContext, useMemo } from "react";
import { FavouritesProvider } from "./FavouritesContext";
import { SiteSettingsProvider } from "./SiteSettingsProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export function ContextProvider({ children }) {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#1876D2",
          },
          background: {
            light: "#F4F4F4",
            main: "#4a148c",
            dark: "#4a148c",
            contrastText: "rgba(0, 0, 0, 0.87)",
          },
        },
        typography: {
          fontFamily: "jost",
          h1: {
            fontSize: "2rem",
            fontWeight: "semibold",
          },
          h2: {
            fontSize: "1.4rem",
            fontWeight: "semibold",
            marginBottom: "0.5rem",
            "@media (min-width: 600px)": {
              fontSize: "1.6rem",
            },
          },
        },
      }),
    [mode]
  );

  return (
    <SiteSettingsProvider>
      <FavouritesProvider>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </FavouritesProvider>
    </SiteSettingsProvider>
  );
}
