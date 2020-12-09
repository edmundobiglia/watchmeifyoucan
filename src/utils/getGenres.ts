const genreTable: [number, string][] = [
  [28, "Action"],
  [12, "Adventure"],
  [16, "Animation"],
  [35, "Comedy"],
  [80, "Crime"],
  [99, "Documentary"],
  [18, "Drama"],
  [10751, "Family"],
  [14, "Fantasy"],
  [36, "History"],
  [27, "Horror"],
  [10402, "Music"],
  [9648, "Mystery"],
  [10749, "Romance"],
  [878, "Science Fiction"],
  [10770, "TV Movie"],
  [53, "Thriller"],
  [10752, "War"],
  [37, "Western"],
];

const getGenres = (genreCodes: number[]) => {
  const genreList = genreTable.reduce(
    (previousGenres: string[], [genreCode, genreName]) => {
      if (genreCodes.includes(genreCode)) {
        previousGenres.push(genreName);

        return previousGenres;
      }
      return previousGenres;
    },
    []
  );

  const genres = genreList.join(", ");

  return genres;
};

export default getGenres;
