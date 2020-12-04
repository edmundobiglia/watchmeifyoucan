import React from "react";

import DarkModeSwitch from "../DarkModeSwitch";

import Logo from "../Logo";

import { AppHeader } from "./styles";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ darkMode, setDarkMode }: Props) => {
  return (
    <AppHeader>
      <div className="wrapper">
        <Logo height={32} className="logo" />

        <DarkModeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </AppHeader>
  );
};

export default Header;
