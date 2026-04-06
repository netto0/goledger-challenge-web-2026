import styles from "./EpisodeCard.module.css";
import { BasicsContext } from "../../../contexts/BasicsContext";
import React from "react";
import type { EpisodeType } from "../../../types/EpisodeType";
import { GoStarFill } from "react-icons/go";
import CardContainer from "@/components/CardContainer/CardContainer";
import { Link } from "react-router";

type props = {
  episode: EpisodeType;
};

export default function EpisodeCard({ episode }: props) {
  const { getTvShowBySeasonId, getSeasonNumber, setNewEpisodeInfos } =
    React.useContext(BasicsContext);

  return (
    <Link to="/editEpisode">
      <CardContainer
        cardKey={episode["@key"]}
        onClick={() => {
          setNewEpisodeInfos(episode);
        }}
      >
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{episode.title}</h1>
          <div className={styles.episodeInfos}>
            <span className={styles.showName}>{getTvShowBySeasonId(episode.season["@key"])}</span>
            <span className={styles.epData}>S{getSeasonNumber(episode.season["@key"])}</span>
            <span className={styles.epData}>Ep{episode.episodeNumber}</span>
            <span className={styles.epData}>{episode.releaseDate.slice(0, 4)}</span>
          </div>
          <span className={styles.description}>{episode.description}</span>
        </div>
        <div className={styles.rating}>
          <span>{(Number(episode.rating) || 0).toFixed(1)}</span>
          <GoStarFill />
        </div>
      </CardContainer>
    </Link>
  );
}
