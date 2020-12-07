import React from "react";
import { format } from "date-fns";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import { Item, DummyPoster } from "./styles";

interface Props {
  title: string;
  overview: string;
  poster_url: string;
  release_date: Date;
  genres: string;
}

const WatchItem = ({ title, overview, poster_url, release_date, genres }: Props) => {
  return (
    <Item>
      {poster_url ? (
        <img className="poster" src={poster_url} alt="Poster" />
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
        <p>{format(release_date, "MM/dd/yyyy")}</p>
        <h4>Sinopsis</h4>
        <p>{overview}</p>
      </div>
      <Logo className="watched-btn" height={27} />
    </Item>
  );
};

export default WatchItem;
