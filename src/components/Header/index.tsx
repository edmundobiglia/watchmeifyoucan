import React from "react";

import Logo from "../Logo";

import { AppHeader } from "./styles";

const Header = () => {
  return (
    <AppHeader>
      <div className="wrapper">
        <Logo height={32} />
      </div>
    </AppHeader>
  );
};

export default Header;
