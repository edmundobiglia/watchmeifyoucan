import React, { useContext } from "react";
import TextTruncate from "react-text-truncate";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import { Item, DummyPoster } from "./styles";

import getGenres from "../../utils/getGenres";
import { WatchListContext } from "../../contexts/WatchListProvider";

interface Props {
  id: number;
  poster_url: string;
  title: string;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  media_type: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchItem = ({
  id,
  title,
  overview,
  poster_url,
  release_date,
  genre_ids,
  media_type,
  setSearchInput,
}: Props) => {
  const { dispatch } = useContext(WatchListContext);

  const posterUrlWithSlash = poster_url ? poster_url.replace(/^\/+/g, "") : "";
  const fullPosterUrl = `https://image.tmdb.org/t/p/w154/${posterUrlWithSlash}`;
  const releaseYear = release_date.getFullYear();
  const genres = genre_ids && getGenres(genre_ids);
  const genresAsStrings = genres.join(", ");

  const handleAddToWatchList = () => {
    // isso aqui vai ser no THEN do método para adicionar no banco de dados
    dispatch({
      type: "ADD_TO_WATCHLIST",
      watchItem: {
        id,
        title,
        overview,
        poster_url: poster_url && fullPosterUrl,
        release_date,
        added_date: Date.now(),
        genres: genresAsStrings,
        media_type,
      },
    });

    // then
    setSearchInput("");
  };

  return (
    <Item>
      {poster_url ? (
        <img className="poster" src={fullPosterUrl} alt="Poster" />
      ) : (
        <DummyPoster>
          <GlassesIcon size={50} />

          <p>Poster Unavailabe</p>
        </DummyPoster>
      )}
      <div className="info">
        <h3>{title}</h3>

        <small>
          {releaseYear} {genre_ids && ` - ${genresAsStrings}`}
        </small>

        <h4>Sinopsis</h4>

        <TextTruncate
          line={3}
          element="p"
          truncateText="…"
          text={overview ? overview : "Not Available"}
        />
      </div>

      <button className="watched-btn" onClick={handleAddToWatchList}>
        <Logo height={27} />
      </button>
    </Item>
  );
};

export default SearchItem;
