import React, { useContext, useState, useEffect } from "react";
import { getUnixTime } from "date-fns";

import { WatchListContext } from "../../contexts/WatchListProvider";

import WatchItem from "../WatchItem";

import { NoWatchList, FilterContainer } from "./styles";

import tvIcon from "../../assets/tv.svg";
import sortIcon from "../../assets/sort.svg";

interface WatchListItem {
  id: string;
  title: string;
  overview: string;
  poster_url: string;
  release_date: Date;
  added_date: number;
  media_type: string;
  genres: string;
}

const WatchList = () => {
  const { state } = useContext(WatchListContext);
  const [watchList, setWatchList] = useState<WatchListItem[]>([]);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    if (filter) {
      setWatchList(state.filter((watchItem) => watchItem.media_type === filter));
    } else {
      setWatchList(state);
    }

    if (sort) {
      setWatchList((previousWatchList) =>
        previousWatchList.sort(
          (a, b) => getUnixTime(a.release_date) - getUnixTime(b.release_date)
        )
      );
    } else {
      setWatchList((previousWatchList) =>
        previousWatchList.sort((a, b) => (a.added_date > b.added_date ? -1 : 1))
      );
    }
  }, [state, filter, sort]);

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

            <button className="sort" onClick={() => setSort(!sort)}>
              <img src={sortIcon} alt="Sort" />
            </button>
          </FilterContainer>

          {watchList.map(({ id, title, overview, poster_url, release_date, genres }) => (
            <WatchItem
              key={id}
              title={title}
              overview={overview}
              poster_url={poster_url}
              release_date={release_date}
              genres={genres}
            />
          ))}
        </>
      )}
    </>
  );
};

export default WatchList;
