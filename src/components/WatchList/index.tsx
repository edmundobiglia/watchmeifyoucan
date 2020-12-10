import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { WatchListContext } from "../../contexts/watchlist/WatchListProvider";
import {
  setWatchListAction,
  sortByReleaseDateAction,
} from "../../contexts/watchlist/actions/watchListActions";

import WatchItem from "../WatchItem";

import { NoWatchList, FilterContainer } from "./styles";

import tvIcon from "../../assets/tv.svg";
import sortIcon from "../../assets/sort.svg";

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

const WatchList = () => {
  const { state, dispatch } = useContext(WatchListContext);

  const [watchList, setWatchList] = useState<WatchListItem[]>(state);
  const [filter, setFilter] = useState("");
  const [sortByReleaseDate, setSortByReleaseDate] = useState(false);

  // useEffect(() => {
  //   axios.get("http://localhost:3333/watchlist").then((response) => {
  //     dispatch(setWatchListAction(response.data));
  //   });
  // }, []);

  useEffect(() => {
    if (state.length === 0) return;

    if (filter) {
      const filteredWatchList = state.filter(
        (watchItem) => watchItem.mediaType === filter
      );

      setWatchList(filteredWatchList);
    } else {
      setWatchList(state);
    }
  }, [state, filter, sortByReleaseDate]);

  const handleSort = () => {
    dispatch(sortByReleaseDateAction(!sortByReleaseDate));

    setSortByReleaseDate(!sortByReleaseDate);
  };

  return (
    <>
      {state.length === 0 ? (
        <NoWatchList>
          <img src={tvIcon} alt="TV" />
          <p>
            You have nothing to watch yet. Search above to add a title to your watchlist.
          </p>
        </NoWatchList>
      ) : (
        <>
          <FilterContainer>
            <button
              className={`filter ${!filter && "active"}`}
              onClick={() => setFilter("")}
            >
              All
            </button>

            <button
              className={`filter ${filter === "tv" && "active"}`}
              onClick={() => setFilter("tv")}
            >
              TV
            </button>

            <button
              className={`filter ${filter === "movie" && "active"}`}
              onClick={() => setFilter("movie")}
            >
              Movies
            </button>

            <button className="sort" onClick={handleSort}>
              <img src={sortIcon} alt="Sort" />
            </button>
          </FilterContainer>

          {watchList.map(
            ({
              id,
              tmdbId,
              title,
              synopsis,
              posterUrl,
              releaseDate,
              genres,
              isWatched,
            }) => (
              <WatchItem
                key={id}
                id={id}
                tmdbId={tmdbId}
                title={title}
                synopsis={synopsis}
                posterUrl={posterUrl}
                releaseDate={releaseDate}
                genres={genres}
                isWatched={isWatched}
              />
            )
          )}
        </>
      )}
    </>
  );
};

export default WatchList;
