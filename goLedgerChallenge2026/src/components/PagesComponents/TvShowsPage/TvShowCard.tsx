import React from "react";
import type { TvShowType } from "../../../types/TvShowType";
import styles from "./TvShowCard.module.css";
import { BasicsContext } from "../../../contexts/BasicsContext";
import CardContainer from "@/components/CardContainer/CardContainer";
import { Link } from "react-router";

type props = {
  tvShow: TvShowType;
};

export default function TvShowCard({ tvShow }: props) {
  const { setNewTvShowInfos } = React.useContext(BasicsContext);
  return (
    <Link to="/editTvShow" className={styles.cardLink}>
      <CardContainer
        cardKey={tvShow["@key"]}
        onClick={() => {
          setNewTvShowInfos(tvShow);
        }}
      >
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{tvShow.title}</h1>
          <div className={styles.tvShowInfos}>
            <span className={styles.description}>{tvShow.description}</span>
          </div>
        </div>
        <div className={styles.recommendedAge}>
          <span title="Recommended age">{tvShow.recommendedAge}</span>
        </div>
      </CardContainer>
    </Link>
  );
}
