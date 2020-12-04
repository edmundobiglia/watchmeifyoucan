import React from "react";

import { Switch } from "./styles";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeSwitch = ({ darkMode, setDarkMode }: Props) => {
  return (
    <Switch
      className="dark-mode-switch"
      onClick={() => setDarkMode((previousValue) => !previousValue)}
    >
      <div className={`dark-mode-indicator ${darkMode && "dark-mode-on"}`}></div>
    </Switch>
  );
};

export default DarkModeSwitch;
