import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import { light, dark } from "./themes/theme";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  const savedDarkModeState =
    JSON.parse(`${localStorage.getItem("watchmeifyoucan:dark-mode")}`) || false;

  const [darkMode, setDarkMode] = useState<boolean>(savedDarkModeState);

  useEffect(() => {
    localStorage.setItem("watchmeifyoucan:dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <GlobalStyle />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
