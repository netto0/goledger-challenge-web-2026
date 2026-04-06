import React, { useEffect } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import TvShowCard from "./TvShowCard";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import { tvShowInitialValues } from "../../../types/TvShowType";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";

export default function TvShowsPage() {
  const { tvShows, setNewTvShowInfos } = React.useContext(BasicsContext);

  tvShows.sort((a, b) => {
    if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1;
    }
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    setNewTvShowInfos(tvShowInitialValues);
  }, []);

  return (
    <>
      {tvShows.length == 0 ? (
        <LoadingComponent />
      ) : (
        <PageContainer>
          <PageTitleContainer
            title="Best Tv Shows"
            subTitle="As determined by users"
            toLink="/addTvShow"
          />
          {tvShows?.map((e) => (
            <TvShowCard tvShow={e} key={e["@key"]} />
          ))}
        </PageContainer>
      )}
    </>
  );
}
