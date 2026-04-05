import React, { useEffect } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import TvShowCard from "./TvShowCard";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import { tvShowInitialValues } from "../../../types/TvShowType";

export default function TvShowsPage() {
  const { tvShows, setActivePage, setNewTvShowInfos } =
    React.useContext(BasicsContext);

  tvShows.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    setNewTvShowInfos(tvShowInitialValues);
  }, []);

  return (
    <PageContainer>
      <PageTitleContainer
        title="Best Tv Shows"
        subTitle="As determined by users"
        buttonFunc={() => setActivePage("addTvShow")}
      />
      {tvShows?.map((e) => (
        <TvShowCard tvShow={e} key={e["@key"]} />
      ))}
    </PageContainer>
  );
}
