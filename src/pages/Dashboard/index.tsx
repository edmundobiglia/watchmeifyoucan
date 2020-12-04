import React from "react";

import WatchItem from "../../components/WatchItem";
import Search from "../../components/Search";

import { Container } from "./styles";

const Dashboard = () => {
  return (
    <Container>
      <Search />
      <WatchItem />
      <WatchItem />
      <WatchItem />
      <WatchItem />
      <WatchItem />
    </Container>
  );
};

export default React.memo(Dashboard);
