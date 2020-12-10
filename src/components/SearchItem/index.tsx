import React, { useContext, useState } from "react";
import TextTruncate from "react-text-truncate";
import axios from "axios";

import { WatchListContext } from "../../contexts/watchlist/WatchListProvider";
import { addToWatchListAction } from "../../contexts/watchlist/actions/watchListActions";

import convertSnakeToCamelCase from "../../utils/convertSnakeToCamelCase";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import errorIcon from "../../assets/error.svg";

import { Item, DummyPoster, SearchError } from "./styles";

interface Props {
  tmdbId: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  mediaType: string;
  genres: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchItem = ({
  tmdbId,
  title,
  synopsis,
  posterUrl,
  releaseDate,
  mediaType,
  genres,
  setSearchInput,
}: Props) => {
  const { dispatch } = useContext(WatchListContext);

  const [error, setError] = useState("");

  const releaseYear = releaseDate.getFullYear();

  const handleAddToWatchList = async (): Promise<void> => {
    setError("");

    try {
      const response = await axios.post("http://localhost:3333/watchlist", {
        tmdb_id: tmdbId,
        title,
        synopsis,
        poster_url: posterUrl,
        release_date: releaseDate,
        media_type: mediaType,
        genres,
        is_watched: false,
      });

      const watchItem = convertSnakeToCamelCase(response.data);

      dispatch(addToWatchListAction(watchItem));

      setSearchInput("");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  return (
    <Item>
      {posterUrl ? (
        <img className="poster" src={posterUrl} alt="Poster" />
      ) : (
        <DummyPoster>
          <GlassesIcon size={50} />

          <p>Poster Unavailabe</p>
        </DummyPoster>
      )}
      <div className="info">
        {error && (
          <SearchError className="error">
            <img src={errorIcon} alt="Error" />

            <span>{error}</span>
          </SearchError>
        )}

        <h3>{title}</h3>

        <small>
          {releaseYear} {genres && ` - ${genres}`}
        </small>

        <h4>Synopsis</h4>

        <TextTruncate
          line={3}
          element="p"
          truncateText="…"
          text={synopsis ? synopsis : "Not Available"}
        />
      </div>

      <button className="watched-btn" onClick={handleAddToWatchList}>
        <Logo height={27} />
      </button>
    </Item>
  );
};

export default SearchItem;
