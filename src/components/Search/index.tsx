import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Loader from "../Loader";
import SearchItem from "../SearchItem";
import { Container, SearchBox, SearchResults, SearchError } from "./styles";

import searchIcon from "../../assets/search-icon.svg";
import clearSearchInput from "../../assets/reset.svg";
import searchErrorIcon from "../../assets/no-results.svg";

import useSearch from "../../hooks/useSearch";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchError, setSearchError] = useState("");

  const nodeRef = useRef(null); // For CSSTransition

  const { searchResults, loadingResults } = useSearch(searchInput, setSearchError);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleClearSearchInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchInput("");
      setSearchError("");
    }
  };

  return (
    <Container>
      <SearchBox>
        <input
          placeholder="Enter a movie or show"
          value={searchInput}
          onChange={handleSearch}
          onKeyDown={handleClearSearchInput}
        />

        <img
          src={searchInput ? clearSearchInput : searchIcon}
          onClick={() => {
            if (searchInput) {
              setSearchInput("");
            }
          }}
          alt="Search"
        />
      </SearchBox>

      <CSSTransition
        nodeRef={nodeRef}
        in={!!searchInput}
        timeout={200}
        classNames="fade-in-down"
        unmountOnExit
      >
        <SearchResults ref={nodeRef}>
          {loadingResults ? (
            <Loader />
          ) : (
            searchResults.map(
              ({ id, title, sinopsis, posterUrl, releaseDate, mediaType, genres }) => {
                return (
                  <SearchItem
                    key={id}
                    id={id}
                    title={title}
                    posterUrl={posterUrl}
                    sinopsis={sinopsis}
                    releaseDate={releaseDate}
                    genres={genres}
                    mediaType={mediaType}
                    setSearchInput={setSearchInput}
                  />
                );
              }
            )
          )}

          {searchError && (
            <SearchError>
              <img src={searchErrorIcon} alt="No Results" />

              <p>{searchError}</p>
            </SearchError>
          )}
        </SearchResults>
      </CSSTransition>
    </Container>
  );
};

export default Search;
