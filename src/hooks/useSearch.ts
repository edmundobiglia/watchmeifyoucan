import { useState, useEffect } from "react";
import api from "../services/api";
import formatSearchResults from "../utils/formatSearchResults";

interface SearchResult {
  tmdbId: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  mediaType: string;
  genres: string;
}

const useSearch = (
  searchInput: string,
  setSearchError: React.Dispatch<React.SetStateAction<string>>
) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);

  useEffect(() => {
    setLoadingResults(true);
    setSearchError("");

    let timeout: ReturnType<typeof setTimeout>;

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
            const searchResults = formatSearchResults(response.data.results);

            const filteredResults = searchResults
              .filter((result: SearchResult) => result.mediaType !== "person")
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
  }, [searchInput, setSearchError]);

  return { searchResults, loadingResults };
};

export default useSearch;
