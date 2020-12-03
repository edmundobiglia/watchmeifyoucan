// interface ObjectKeys {
//   [key: string]: string | number;
// }

// const genres: ObjectKeys = {
//   28: "Action",
//   12: "Adventure",
//   16: "Animation",
//   35: "Comedy",
//   80: "Crime",
//   99: "Documentary",
//   18: "Drama",
//   10751: "Family",
//   14: "Fantasy",
//   36: "History",
//   27: "Horror",
//   10402: "Music",
//   9648: "Mystery",
//   10749: "Romance",
//   878: "Science Fiction",
//   10770: "TV Movie",
//   53: "Thriller",
//   10752: "War",
//   37: "Western",
// };

// const getGenres = (genreCodes: number[]) => {
//   const genreNames = genreCodes.reduce(
//     (previousGenreNameArray: any[], genreCode: number) => {
//       const genreCodeToString = genreCode.toString();
//       const genreName = genres[genreCodeToString];
//       previousGenreNameArray.push(genreName);
//       return previousGenreNameArray;
//     },
//     []
//   );

//   const genreNamesAsStringsSeparatedByComma = genreNames.join(", ");

//   return genreNamesAsStringsSeparatedByComma;
// };

// export default getGenres;

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
  const genres = genreTable.reduce((previousGenres: string[], [genreCode, genreName]) => {
    if (genreCodes.includes(genreCode)) {
      previousGenres.push(genreName);

      return previousGenres;
    }
    return previousGenres;
  }, []);

  return genres;
};

export default getGenres;
