import React, { useContext } from "react";
import { format } from "date-fns";

import { WatchListContext } from "../../contexts/watchlist/WatchListProvider";

import { RemoveFromWatchlistAction } from "../../contexts/watchlist/actions/watchListActions";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import trashIcon from "../../assets/trash.svg";

import { Item, DummyPoster } from "./styles";

interface Props {
  id: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  genres: string;
  isWatched: boolean;
}

const WatchItem = ({
  id,
  title,
  synopsis,
  posterUrl,
  releaseDate,
  genres,
  isWatched,
}: Props) => {
  const { dispatch } = useContext(WatchListContext);

  const handleRemoveFromWatchlist = () => {
    dispatch(RemoveFromWatchlistAction(id));
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
        <small>{genres}</small>
        <h4>Release Date</h4>
        <p>{format(releaseDate, "MM/dd/yyyy")}</p>
        <h4>Synopsis</h4>
        <p>{synopsis}</p>
      </div>

      <div className="actions">
        <button>
          <Logo className="watched-btn" height={24} />
        </button>

        <button onClick={handleRemoveFromWatchlist}>
          <img src={trashIcon} alt="Remove" />
        </button>
      </div>
    </Item>
  );
};

export default WatchItem;
