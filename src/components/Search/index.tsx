import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Loader from "../Loader";
import WatchItem from "../WatchItem";
import SearchItem from "../SearchItem";
import { Container, SearchBox, SearchResults, NoResults } from "./styles";
import searchIcon from "../../assets/search-icon.svg";
import noResultsIcon from "../../assets/no-results.svg";

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
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setLoadingResults(true);
    setNoResults(false);

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
              setNoResults(true);
            }

            setLoadingResults(false);

            setSearchResults(filteredResults);
          });
      }, 300);
    } else {
      setSearchResults([]);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [searchInput]);

  return (
    <Container>
      <SearchBox>
        <input
          placeholder="Start typing a movie or show"
          value={searchInput}
          onChange={handleSearch}
        />
        <img className="search-icon" src={searchIcon} alt="Search" />
      </SearchBox>

      {searchInput && (
        <SearchResults>
          {loadingResults ? (
            <Loader />
          ) : (
            searchResults.map((result) => (
              <SearchItem
                key={result.id}
                title={
                  result.title ||
                  result.name ||
                  result.original_title ||
                  result.original_name
                }
                poster_url={result.poster_path}
                overview={result.overview}
                release_date={result.release_date || result.first_air_date}
                genre_ids={result.genre_ids}
              />
            ))
          )}
          {noResults && (
            <NoResults>
              <img src={noResultsIcon} alt="No Results" />
              <p>No results found.</p>
            </NoResults>
          )}
        </SearchResults>
      )}
    </Container>
  );
};

export default Search;
