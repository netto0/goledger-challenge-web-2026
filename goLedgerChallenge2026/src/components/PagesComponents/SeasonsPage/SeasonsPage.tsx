import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import SeasonCard from "./SeasonCard";
import PageContainer from "../../PageContainer/PageContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";

export default function SeasonsPage() {
  const { seasons, setActivePage } = React.useContext(BasicsContext);

  return (
    <PageContainer>
      <PageTitleContainer
        title="Popular Seasons"
        subTitle="Determined by users"
        buttonFunc={() => setActivePage("addSeason")}
      />
      {seasons?.map((e) => (
        <SeasonCard season={e} key={e["@key"]} />
      ))}
    </PageContainer>
  );
}
