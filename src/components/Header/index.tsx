import React from "react";
import { Link } from "react-router-dom";

import DarkModeSwitch from "../DarkModeSwitch";

import Logo from "../Logo";

import { AppHeader } from "./styles";

const Header = () => {
  return (
    <AppHeader>
      <div className="wrapper">
        <Link to="/">
          <Logo height={32} className="logo" />
        </Link>

        <DarkModeSwitch />
      </div>
    </AppHeader>
  );
};

export default Header;
