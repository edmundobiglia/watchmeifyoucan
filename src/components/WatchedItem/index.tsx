import React, { useState } from "react";
import axios from "axios";
import { format } from "date-fns";

import GlassesIcon from "../GlassesIcon";

import checkIcon from "../../assets/check.svg";
import trashIcon from "../../assets/trash.svg";
import errorIcon from "../../assets/error.svg";
import loaderIcon from "../../assets/loader.svg";

import { Item, DummyPoster, Warning } from "./styles";

interface WatchListItem {
  id: string;
  tmdbId: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  addedDate: Date;
  mediaType: string;
  genres: string;
  isWatched: boolean;
}

interface Props {
  id: string;
  tmdbId: number;
  title: string;
  synopsis: string;
  posterUrl: string;
  releaseDate: Date;
  genres: string;
  isWatched: boolean;
  setWatchedList: React.Dispatch<React.SetStateAction<WatchListItem[]>>;
}

const WatchItem = ({
  id,
  title,
  synopsis,
  posterUrl,
  releaseDate,
  genres,
  isWatched,
  setWatchedList,
}: Props) => {
  const [warning, setWarning] = useState("");
  const [settingAsWatched, setSettingAsWatched] = useState(false);

  const handleConfirmRemoval = () => {
    setWarning("removal");
  };

  const removeFromWatchedList = () => {
    setWatchedList((previousWatchedList) =>
      previousWatchedList.filter((watchedListItem) => watchedListItem.id !== id)
    );
  };

  const handleRemoveFromWatchedlist = async () => {
    try {
      await axios.delete(`http://localhost:3333/watchlist/${id}`);

      removeFromWatchedList();
    } catch (err) {
      setWarning("error");
    }
  };

  const handleSetAsNotWatched = async () => {
    setSettingAsWatched(true);

    try {
      console.log("before patch operation");

      await axios.patch(`http://localhost:3333/watchlist/${id}`, {
        is_watched: !isWatched,
      });

      setSettingAsWatched(false);

      removeFromWatchedList();
    } catch (err) {
      setWarning("error");
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
        {warning && (
          <Warning>
            <img src={errorIcon} alt="Error" />

            {warning === "removal" && (
              <div>
                Confirm removal?
                <button onClick={handleRemoveFromWatchedlist}>Yes</button>{" "}
                <button onClick={() => setWarning("")}>No</button>
              </div>
            )}

            {warning === "error" && (
              <div>
                Somewthing went wrong, try again.
                <button onClick={() => setWarning("")}>OK</button>
              </div>
            )}
          </Warning>
        )}
        <h3>{title}</h3>
        <small>{genres}</small>
        <h4>Release Date</h4>
        <p>{format(releaseDate, "MM/dd/yyyy")}</p>
        <h4>Synopsis</h4>
        <p>{synopsis}</p>
      </div>

      {!warning && (
        <div className="actions">
          <button onClick={handleSetAsNotWatched}>
            {settingAsWatched ? (
              <img src={loaderIcon} alt="Loader" />
            ) : (
              <img src={checkIcon} alt="Mark As Not Watched" />
            )}
          </button>

          <button onClick={handleConfirmRemoval}>
            <img src={trashIcon} alt="Remove" />
          </button>
        </div>
      )}
    </Item>
  );
};

export default WatchItem;
