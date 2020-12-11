import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        <Link to="/dashboard">Watchlist</Link>
      </p>
      <p>
        <Link to="/watched">Watched</Link>
      </p>
    </div>
  );
};

export default React.memo(Home);
