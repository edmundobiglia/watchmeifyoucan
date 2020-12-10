interface SnakeCaseWatchListItem {
  id: string;
  tmdb_id: number;
  title: string;
  synopsis: string;
  poster_url: string;
  release_date: Date;
  added_date: Date;
  media_type: string;
  genres: string;
  is_watched: boolean;
}

const convertSnakeToCamelCase = ({
  id,
  tmdb_id: tmdbId,
  title,
  synopsis,
  poster_url: posterUrl,
  release_date: releaseDate,
  added_date: addedDate,
  media_type: mediaType,
  genres,
  is_watched: isWatched,
}: SnakeCaseWatchListItem) => {
  const camelCaseWatchListItem = {
    id,
    tmdbId,
    title,
    synopsis,
    posterUrl,
    releaseDate: new Date(releaseDate),
    addedDate: new Date(addedDate),
    mediaType,
    genres,
    isWatched,
  };

  return camelCaseWatchListItem;
};

export default convertSnakeToCamelCase;
