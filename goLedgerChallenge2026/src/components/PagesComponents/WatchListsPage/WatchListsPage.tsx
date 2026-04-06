import React, { useEffect } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import WatchListCard from "./WatchListCard";
import PageContainer from "../../PageContainer/PageContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import { watchListInitialValues } from "../../../types/WatchListType";

export default function WatchListsPage() {
  const { watchLists, setActivePage, setNewWatchListInfos } =
    React.useContext(BasicsContext);
  watchLists.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });

  useEffect(() => {
    setNewWatchListInfos(watchListInitialValues);
  }, []);

  return (
    <PageContainer>
      <PageTitleContainer
        title="Popular Watch Lists"
        subTitle="As determined by users"
        buttonFunc={() => setActivePage("addWatchlist")}
        toLink="/watchlists/addWatchlist"
      />
      {watchLists?.map((e) => (
        <WatchListCard watchList={e} key={e["@key"]} />
      ))}
    </PageContainer>
  );
}
