import React from "react";

import Logo from "../Logo";

import { Item } from "./styles";

import poster from "../../assets/_dummy/poster.jpg";

const WatchItem = () => {
  return (
    <Item>
      <img className="poster" src={poster} alt="Poster" />
      <div className="info">
        <h3>Big Little Lies</h3>
        <small>Drama 50 min</small>
        <h4>Release Date</h4>
        <p>December 20, 2020</p>
        <h4>Sinopsis</h4>
        <p>
          The tale of three mothers of first graders whose apparently perfect lives
          unravel to the point of murder.
        </p>
      </div>
      <Logo className="watched-btn" height={27} />
    </Item>
  );
};

export default WatchItem;
