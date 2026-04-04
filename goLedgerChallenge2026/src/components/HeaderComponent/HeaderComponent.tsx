import React from "react";
import styles from "./HeaderComponent.module.css";
import { BasicsContext } from "../../contexts/BasicsContext";

export default function HeaderComponent() {
  const { activePage, setActivePage } = React.useContext(BasicsContext);

  return (
    <header className={styles.container}>
      <span className={styles.logo} onClick={() => setActivePage("tvShows")}>
        ShowsIndex
      </span>
      <ul>
        <li
          className={
            ["tvShows", "addTvShow", "editTvShow"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }
          onClick={() => setActivePage("tvShows")}
        >
          TvShows
        </li>
        <li
          className={
            ["seasons", "addSeason", "editSeason"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }
          onClick={() => setActivePage("seasons")}
        >
          Seasons
        </li>
        <li
          className={
            ["episodes", "addEpisode", "editEpisode"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }
          onClick={() => setActivePage("episodes")}
        >
          Episodes
        </li>
        <li
          className={
            ["watchlists", "addWatchlist", "editWatchlist"].includes(activePage)
              ? styles.activePageLI
              : undefined
          }
          onClick={() => setActivePage("watchlists")}
        >
          Watch Lists
        </li>
      </ul>
    </header>
  );
}
