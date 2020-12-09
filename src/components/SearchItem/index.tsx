import React, { useContext } from "react";
import TextTruncate from "react-text-truncate";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import { Item, DummyPoster } from "./styles";

import { WatchListContext } from "../../contexts/WatchListProvider";

interface Props {
  id: number;
  title: string;
  sinopsis: string;
  posterUrl: string;
  releaseDate: Date;
  mediaType: string;
  genres: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchItem = ({
  id,
  title,
  sinopsis,
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
    dispatch({
      type: "ADD_TO_WATCHLIST",
      watchItem: {
        id,
        title,
        sinopsis,
        posterUrl,
        releaseDate,
        addedDate: Date.now(),
        genres,
        mediaType,
      },
    });

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

        <h4>Sinopsis</h4>

        <TextTruncate
          line={3}
          element="p"
          truncateText="…"
          text={sinopsis ? sinopsis : "Not Available"}
        />
      </div>

      <button className="watched-btn" onClick={handleAddToWatchList}>
        <Logo height={27} />
      </button>
    </Item>
  );
};

export default SearchItem;
