import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import api from "../../services/api";
import Loader from "../Loader";
import SearchItem from "../SearchItem";
import { Container, SearchBox, SearchResults, NoResults } from "./styles";
import searchIcon from "../../assets/search-icon.svg";
import resetInputIcon from "../../assets/reset.svg";
import searchErrorIcon from "../../assets/no-results.svg";

interface SearchResult {
  id: number;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  first_air_date: string;
  genre_ids: number[];
}

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    console.log(!!searchInput);
    setLoadingResults(true);
    setSearchError("");

    let timeout: any;

    if (searchInput) {
      timeout = setTimeout(() => {
        api
          .get(
            `3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchInput}&page=1&append_to_response=budget`,
            {
              headers: { Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}` },
            }
          )
          .then((response) => {
            const filteredResults = response.data.results
              .filter((result: SearchResult) => result.media_type !== "person")
              .slice(0, 5);

            if (filteredResults.length === 0) {
              setSearchError("No results found.");
            }

            setLoadingResults(false);

            setSearchResults(filteredResults);
          })
          .catch(() => {
            setLoadingResults(false);
            setSearchError("Search error. Try again.");
          });
      }, 300);
    } else {
      setSearchResults([]);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

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
        in={!!searchInput}
        timeout={200}
        classNames="fade-in-down"
        unmountOnExit
      >
        <SearchResults>
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
