import type { WatchListType } from "../../../types/WatchListType";
import styles from "./WatchListCard.module.css";

type props = {
  watchList: WatchListType;
};

export default function WatchListCard({ watchList }: props) {
  return (
    <div key={watchList["@key"]} className={styles.cardContainer}>
      <div>
        <h1>{watchList.title}</h1>
        <div className={styles.watchListInfos}>
          <span className={styles.description}>{watchList.description}</span>
        </div>
      </div>
    </div>
  );
}
