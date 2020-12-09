import React from "react";
import { format } from "date-fns";

import Logo from "../Logo";
import GlassesIcon from "../GlassesIcon";

import { Item, DummyPoster } from "./styles";

interface Props {
  title: string;
  sinopsis: string;
  posterUrl: string;
  releaseDate: Date;
  genres: string;
}

const WatchItem = ({ title, sinopsis, posterUrl, releaseDate, genres }: Props) => {
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
        <h4>Sinopsis</h4>
        <p>{sinopsis}</p>
      </div>
      <Logo className="watched-btn" height={27} />
    </Item>
  );
};

export default WatchItem;
