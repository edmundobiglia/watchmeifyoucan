import React, { useState, useEffect } from "react";
import axios from "axios";

import WatchedItem from "../../components/WatchedItem";
import Loader from "../../components/Loader";

import { Container, Error, NoWatchList } from "./styles";

import errorIcon from "../../assets/error.svg";
import tvIcon from "../../assets/tv.svg";

import convertSnakeToCamelCase from "../../utils/convertSnakeToCamelCase";

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

const Watched = () => {
  const [loading, setLoading] = useState(true);
  const [watchedList, setWatchedList] = useState<WatchListItem[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3333/watchlist/watched")
      .then((response) => {
        const formattedWatchList = response.data.map((watchListItem: WatchListItemDTO) =>
          convertSnakeToCamelCase(watchListItem)
        );

        setWatchedList(formattedWatchList);

        setLoading(false);
      })
      .catch((err) => {
        if (err.response.data.error) {
          setError(err.response.data.error);
        } else {
          setError("An error occurred. Try reloading the page.");
        }

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <Error className="error">
        <img src={errorIcon} alt="Error" />

        <span>{error}</span>
      </Error>
    );
  }
  return (
    <Container>
      {watchedList.length === 0 ? (
        <NoWatchList>
          <img src={tvIcon} alt="TV" />
          <p>
            You have nothing to watch yet. Search above to add a title to your watchlist.
          </p>
        </NoWatchList>
      ) : (
        <>
          <h1>Things you've watched</h1>
          {watchedList.map(
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
              <WatchedItem
                key={id}
                id={id}
                tmdbId={tmdbId}
                title={title}
                synopsis={synopsis}
                posterUrl={posterUrl}
                releaseDate={releaseDate}
                genres={genres}
                isWatched={isWatched}
                setWatchedList={setWatchedList}
              />
            )
          )}
        </>
      )}
    </Container>
  );
};

export default React.memo(Watched);
