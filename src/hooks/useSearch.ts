import { useState, useEffect } from "react";
import api from "../services/api";

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

const useSearch = (
  searchInput: string,
  setSearchError: React.Dispatch<React.SetStateAction<string>>
) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loadingResults, setLoadingResults] = useState(false);

  useEffect(() => {
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
  }, [searchInput, setSearchError]);

  return { searchResults, loadingResults };
};

export default useSearch;
