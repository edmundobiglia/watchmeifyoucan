import React from "react";

import { Container } from "./styles";

import loader from "../../assets/loader.svg";

const Loader = () => (
  <Container>
    <img src={loader} alt="Loader" />
  </Container>
);

export default Loader;
