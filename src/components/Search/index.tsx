import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import Loader from "../Loader";
import SearchItem from "../SearchItem";
import { Container, SearchBox, SearchResults, NoResults } from "./styles";
import searchIcon from "../../assets/search-icon.svg";
import resetInputIcon from "../../assets/reset.svg";
import searchErrorIcon from "../../assets/no-results.svg";

import useSearch from "../../hooks/useSearch";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchError, setSearchError] = useState("");

  const nodeRef = useRef(null);

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
          placeholder="Start typing a movie or show"
          value={searchInput}
          onChange={handleSearch}
          onKeyDown={handleClearSearchInput}
        />

        <img
          src={searchInput ? resetInputIcon : searchIcon}
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
              ({
                id,
                title,
                name,
                original_title,
                original_name,
                poster_path,
                overview,
                release_date,
                first_air_date,
                genre_ids,
              }) => {
                const availableTitle = title || name || original_title || original_name;

                return (
                  <SearchItem
                    key={id}
                    title={availableTitle}
                    poster_url={poster_path}
                    overview={overview}
                    release_date={release_date || first_air_date}
                    genre_ids={genre_ids}
                  />
                );
              }
            )
          )}

          {searchError && (
            <NoResults>
              <img src={searchErrorIcon} alt="No Results" />

              <p>{searchError}</p>
            </NoResults>
          )}
        </SearchResults>
      </CSSTransition>
    </Container>
  );
};

export default Search;
