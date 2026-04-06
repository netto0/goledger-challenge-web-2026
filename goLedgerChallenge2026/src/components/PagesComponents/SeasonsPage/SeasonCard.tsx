import styles from "./SeasonCard.module.css";
import type { SeasonType } from "../../../types/SeasonType";
import { BasicsContext } from "../../../contexts/BasicsContext";
import React from "react";
import CardContainer from "@/components/CardContainer/CardContainer";
import { Link } from "react-router";

type props = {
  season: SeasonType;
};

export default function SeasonCard({ season }: props) {
  const { getTvShowTitle, getEpisodesCount, setNewSeasonInfos } =
    React.useContext(BasicsContext);

  return (
    <Link to="/editSeason">
      <CardContainer
        cardKey={season["@key"]}
        onClick={() => {
          setNewSeasonInfos(season);
        }}
      >
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
      </CardContainer>
    </Link>
  );
}
