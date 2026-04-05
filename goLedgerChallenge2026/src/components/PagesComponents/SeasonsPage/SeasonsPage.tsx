import React, { useEffect } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import SeasonCard from "./SeasonCard";
import PageContainer from "../../PageContainer/PageContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import { seasonInitialValues } from "../../../types/SeasonType";

export default function SeasonsPage() {
  const { seasons, setActivePage, setNewSeasonInfos } =
    React.useContext(BasicsContext);

  seasons.sort((a, b) => {
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    setNewSeasonInfos(seasonInitialValues);
  }, []);

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
