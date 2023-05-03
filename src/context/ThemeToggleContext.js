import React, { useContext, useState, createContext, useEffect } from "react";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

const ColorModeContext = createContext();

export function useColorMode() {
  return useContext(ColorModeContext);
}

export function ColorModeProvider({ children }) {
  const [mode, setMode] = React.useState("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={{ colorMode, mode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
