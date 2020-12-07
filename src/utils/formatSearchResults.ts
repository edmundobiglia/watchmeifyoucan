import getGenres from "./getGenres";

interface SearchResult {
  id: number;
  title: string;
  name: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  media_type: string;
  genre_ids: number[];
}

const formatSearchResult = (searchResults: SearchResult[]) => {
  const formattedSearchResults = searchResults.map(
    ({
      id,
      title,
      name,
      original_title,
      original_name,
      overview,
      poster_path,
      release_date,
      first_air_date,
      media_type,
      genre_ids,
    }) => {
      const posterUrlWithSlash = poster_path ? poster_path.replace(/^\/+/g, "") : "";
      const posterUrl = `https://image.tmdb.org/t/p/w154/${posterUrlWithSlash}`;
      const genreList = genre_ids && getGenres(genre_ids);
      const genres = genreList.join(", ");

      const formattedSearchResult = {
        id,
        title: title || original_title || name || original_name,
        sinopsis: overview,
        posterUrl,
        releaseDate: new Date(release_date || first_air_date),
        mediaType: media_type,
        genres,
      };

      return formattedSearchResult;
    }
  );

  return formattedSearchResults;
};

export default formatSearchResult;
