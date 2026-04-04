import React from "react";
import type { TvShowType } from "../../../types/TvShowType";
import styles from "./TvShowCard.module.css";
import { BasicsContext } from "../../../contexts/BasicsContext";

type props = {
  tvShow: TvShowType;
};

export default function TvShowCard({ tvShow }: props) {
  const { setActivePage, setNewTvShowInfos } = React.useContext(BasicsContext);
  return (
    <div
      key={tvShow["@key"]}
      className={styles.showCardContainer}
      onClick={() => {
        setNewTvShowInfos(tvShow);
        setActivePage("editTvShow");
      }}
    >
      <div>
        <h1>{tvShow.title}</h1>
        <div className={styles.tvShowInfos}>
          <span className={styles.description}>{tvShow.description}</span>
        </div>
      </div>
      <div className={styles.recommendedAge}>
        <span>{tvShow.recommendedAge}</span>
      </div>
    </div>
  );
}
