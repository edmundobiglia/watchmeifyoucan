import React from "react";
import TextTruncate from "react-text-truncate";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import { Item, DummyPoster } from "./styles";

import getGenres from "../../utils/getGenres";

interface Props {
  poster_url: string;
  title: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
}

const WatchItem = ({ poster_url, overview, title, release_date, genre_ids }: Props) => {
  const posterUrlWithSlash = poster_url ? poster_url.replace(/^\/+/g, "") : "";

  const fullPosterUrl = `https://image.tmdb.org/t/p/w154/${posterUrlWithSlash}`;

  const releaseYear = new Date(release_date).getFullYear();

  const genres = genre_ids && getGenres(genre_ids);

  const genresAsStrings = genres.join(", ");

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
      <Logo className="watched-btn" height={27} />
    </Item>
  );
};

export default WatchItem;
