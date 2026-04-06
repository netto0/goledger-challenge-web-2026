import React from "react";
import type { WatchListType } from "../../../types/WatchListType";
import styles from "./WatchListCard.module.css";
import { BasicsContext } from "../../../contexts/BasicsContext";
import CardContainer from "@/components/CardContainer/CardContainer";
import { Link } from "react-router";

type props = {
  watchList: WatchListType;
};

export default function WatchListCard({ watchList }: props) {
  const { setNewWatchListInfos } = React.useContext(BasicsContext);
  return (
    <Link to="/editWatchlist">
      <CardContainer
        cardKey={watchList["@key"]}
        onClick={() => {
          setNewWatchListInfos(watchList);
        }}
      >
        <div>
          <h1>{watchList.title}</h1>
          <div className={styles.watchListInfos}>
            <span className={styles.description}>{watchList.description}</span>
          </div>
        </div>
      </CardContainer>
    </Link>
  );
}
