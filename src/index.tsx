import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import DarkModeProvider from "./contexts/darkMode/DarkModeProvider";
import WatchListProvider from "./contexts/watchlist/watchListProvider";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <WatchListProvider>
        <App />
      </WatchListProvider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
