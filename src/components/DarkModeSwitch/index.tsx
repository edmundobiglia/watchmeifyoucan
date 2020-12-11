import React, { useContext } from "react";

import { DarkModeContext } from "../../contexts/darkMode/DarkModeProvider";
import { toggleDarkModeAction } from "../../contexts/darkMode/darkModeActions";

import { Switch } from "./styles";

const DarkModeSwitch = () => {
  const { state, dispatch } = useContext(DarkModeContext);

  return (
    <Switch className="dark-mode-switch" onClick={() => dispatch(toggleDarkModeAction())}>
      <div className={`dark-mode-indicator ${state && "dark-mode-on"}`}></div>
    </Switch>
  );
};

export default DarkModeSwitch;
