import React from "react";
import styles from "./HeaderComponent.module.css";
import { BasicsContext } from "../../contexts/BasicsContext";

export default function HeaderComponent() {
  const { activePage, setActivePage } = React.useContext(BasicsContext);

  return (
    <header className={styles.container}>
      <span>ShowsIndex</span>
      <ul>
        <li
          className={activePage == "tvShows" ? styles.activePageLI : undefined}
          onClick={() => setActivePage("tvShows")}
        >
          TvShows
        </li>
        <li
          className={activePage == "seasons" ? styles.activePageLI : undefined}
          onClick={() => setActivePage("seasons")}
        >
          Seasons
        </li>
        <li
          className={activePage == "episodes" ? styles.activePageLI : undefined}
          onClick={() => setActivePage("episodes")}
        >
          Episodes
        </li>
        <li
          className={
            activePage == "watchlists" ? styles.activePageLI : undefined
          }
          onClick={() => setActivePage("watchlists")}
        >
          Watch Lists
        </li>
      </ul>
    </header>
  );
}
