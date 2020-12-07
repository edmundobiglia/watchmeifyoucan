import React from "react";

import WatchList from "../../components/WatchList";
import Search from "../../components/Search";

import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Search />
      <WatchList />
    </Container>
  );
};

export default React.memo(Dashboard);
