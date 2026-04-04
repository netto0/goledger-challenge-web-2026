import styles from "./SeasonCard.module.css";
import type { SeasonType } from "../../../types/SeasonType";
import { BasicsContext } from "../../../contexts/BasicsContext";
import React from "react";

type props = {
  season: SeasonType;
};

export default function SeasonCard({ season }: props) {
  const { getTvShowTitle, getEpisodesCount } = React.useContext(BasicsContext);

  return (
    <div key={season["@key"]} className={styles.cardContainer}>
      <div>
        <h1>{getTvShowTitle(season.tvShow["@key"])}</h1>
        <div className={styles.seasonInfos}>
          <span>{season.year}</span>
          <span>{getEpisodesCount(season["@key"])} episodes</span>
        </div>
      </div>
      <div className={styles.seasonNumber}>
        <span>#{season.number}</span>
      </div>
    </div>
  );
}
