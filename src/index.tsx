import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WatchListProvider from "./contexts/watchlist/WatchListProvider";

ReactDOM.render(
  <React.StrictMode>
    <WatchListProvider>
      <App />
    </WatchListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
