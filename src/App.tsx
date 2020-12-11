import React, { useContext } from "react";
import { DarkModeContext } from "./contexts/darkMode/DarkModeProvider";
import { ThemeProvider } from "styled-components";

import Routes from "./routes/";

import GlobalStyle from "./styles/global";
import { light, dark } from "./themes/theme";

function App() {
  const { state: darkModeOn } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={darkModeOn ? dark : light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
