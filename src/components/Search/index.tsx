import React from "react";

import { Container, SearchBox } from "./styles";

import searchIcon from "../../assets/search-icon.svg";

const Search = () => {
  return (
    <Container>
      <SearchBox>
        <input type="text" placeholder="Start typing a movie or show" />
        <img className="search-icon" src={searchIcon} alt="Search" />
      </SearchBox>
    </Container>
  );
};

export default Search;
