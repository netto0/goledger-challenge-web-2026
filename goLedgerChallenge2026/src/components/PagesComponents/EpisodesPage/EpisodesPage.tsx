import React, { useEffect } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import EpisodeCard from "./EpisodeCard";
import PageContainer from "../../PageContainer/PageContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import { episodeInitialValues } from "../../../types/EpisodeType";

export default function EpisodesPage() {
  const { episodes, setActivePage, setNewEpisodeInfos } =
    React.useContext(BasicsContext);
  episodes.sort((a, b) => {
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.rating > b.rating) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    setNewEpisodeInfos(episodeInitialValues);
  }, []);

  return (
    <PageContainer>
      <PageTitleContainer
        title="Best Episodes"
        subTitle="As determined by users"
        buttonFunc={() => setActivePage("addEpisode")}
        toLink="/episodes/addEpisode"
      />
      {episodes?.map((e) => (
        <EpisodeCard episode={e} key={e["@key"]} />
      ))}
    </PageContainer>
  );
}
