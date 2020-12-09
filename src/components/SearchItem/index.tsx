import React, { useContext } from "react";
import TextTruncate from "react-text-truncate";

import { WatchListContext } from "../../contexts/watchlist/WatchListProvider";
import { addAction } from "../../contexts/watchlist/actions/watchListActions";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import { Item, DummyPoster } from "./styles";

interface Props {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  mediaType: string;
  genres: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchItem = ({
  id,
  title,
  synopsis,
  posterUrl,
  releaseDate,
  mediaType,
  genres,
  setSearchInput,
}: Props) => {
  const { dispatch } = useContext(WatchListContext);

  const releaseYear = releaseDate.getFullYear();

  const handleAddToWatchList = () => {
    // isso aqui vai ser no THEN do método para adicionar no banco de dados

    const watchItem = {
      id,
      title,
      synopsis,
      posterUrl,
      releaseDate,
      addedDate: new Date(),
      mediaType,
      genres,
      isWatched: false,
    };

    dispatch(addAction(watchItem));

    // then
    setSearchInput("");
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
