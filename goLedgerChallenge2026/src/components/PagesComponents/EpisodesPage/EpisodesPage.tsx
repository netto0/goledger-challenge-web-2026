import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import EpisodeCard from "./EpisodeCard";
import PageContainer from "../../PageContainer/PageContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";

export default function EpisodesPage() {
  const { episodes, setActivePage } = React.useContext(BasicsContext);
  return (
    <PageContainer>
      <PageTitleContainer
        title="Best Episodes"
        subTitle="As determined by users"
        buttonFunc={() => setActivePage("addEpisode")}
      />
      {episodes?.map((e) => (
        <EpisodeCard episode={e} key={e["@key"]} />
      ))}
    </PageContainer>
  );
}
