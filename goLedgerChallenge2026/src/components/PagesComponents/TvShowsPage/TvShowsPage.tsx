import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import TvShowCard from "./TvShowCard";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";

export default function TvShowsPage() {
  const { tvShows, setActivePage } = React.useContext(BasicsContext);

  return (
    <PageContainer>
      <PageTitleContainer
        title="Best Tv Shows"
        subTitle="As determined by users"
        buttonFunc={()=>setActivePage("addTvShow")}
      />
      {tvShows?.map((e) => (
        <TvShowCard tvShow={e} key={e["@key"]} />
      ))}
    </PageContainer>
  );
}
