import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import convertSnakeToCamelCase from "../../utils/convertSnakeToCamelCase";

import { WatchListContext } from "../../contexts/watchlist/WatchListProvider";
import {
  setWatchListAction,
  sortByReleaseDateAction,
} from "../../contexts/watchlist/actions/watchListActions";

import WatchItem from "../WatchItem";
import Loader from "../Loader";

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

interface WatchListItemDTO {
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

const WatchList = () => {
  const { state, dispatch } = useContext(WatchListContext);

  const [loading, setLoading] = useState(true);
  const [watchList, setWatchList] = useState<WatchListItem[]>(state);
  const [filter, setFilter] = useState("");
  const [sortByReleaseDate, setSortByReleaseDate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3333/watchlist").then((response) => {
      const formattedWatchList = response.data.map((watchListItem: WatchListItemDTO) =>
        convertSnakeToCamelCase(watchListItem)
      );

      dispatch(setWatchListAction(formattedWatchList));

      setLoading(false);
    });
  }, [dispatch]);

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

  if (loading) {
    return <Loader />;
  }
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
