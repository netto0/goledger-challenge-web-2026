import styles from "./EpisodeCard.module.css";
import { BasicsContext } from "../../../contexts/BasicsContext";
import React from "react";
import type { EpisodeType } from "../../../types/EpisodeType";
import { GoStarFill } from "react-icons/go";

type props = {
  episode: EpisodeType;
};

export default function EpisodeCard({ episode }: props) {
  const { getTvShowBySeasonId, getSeasonNumber } =
    React.useContext(BasicsContext);

  return (
    <div key={episode["@key"]} className={styles.cardContainer}>
      <div>
        <h1>{episode.title}</h1>
        <div className={styles.episodeInfos}>
          <span>{getTvShowBySeasonId(episode.season["@key"])}</span>
          <span>S{getSeasonNumber(episode.season["@key"])}</span>
          <span>Ep{episode.episodeNumber}</span>
          <span>{episode.releaseDate.slice(0, 4)}</span>
        </div>
        <span className={styles.description}>{episode.description}</span>
      </div>
      <div className={styles.rating}>
        <span>{(Number(episode.rating) || 0).toFixed(1)}</span>
        <GoStarFill />
      </div>
    </div>
  );
}
