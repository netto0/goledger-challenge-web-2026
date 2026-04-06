import React from "react";
import styles from "./HeaderComponent.module.css";
import { BasicsContext } from "../../contexts/BasicsContext";
import { Link } from "react-router";

export default function HeaderComponent() {
  const { activePage, setActivePage } = React.useContext(BasicsContext);

  return (
    <header className={styles.container}>
      <span className={styles.logo} onClick={() => setActivePage("tvShows")}>
        Shows<span style={{ color: "#db5800" }}>index</span>
      </span>
      <ul>
        <Link
          to="tvShows"
          className={
            ["tvShows", "addTvShow", "editTvShow"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }

          // onClick={() => setActivePage("tvShows")}
        >
          TvShows
        </Link>
        <Link
          to="seasons"
          className={
            ["seasons", "addSeason", "editSeason"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }
          // onClick={() => setActivePage("seasons")}
        >
          Seasons
        </Link>
        <Link
          to="episodes"
          className={
            ["episodes", "addEpisode", "editEpisode"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }
          // onClick={() => setActivePage("episodes")}
        >
          Episodes
        </Link>
        <Link
          to="watchlists"
          className={
            ["watchlists", "addWatchlist", "editWatchlist"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }
          // onClick={() => setActivePage("watchlists")}
        >
          Watch Lists
        </Link>
      </ul>
    </header>
  );
}
