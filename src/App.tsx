import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import { light, dark } from "./themes/theme";

import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
