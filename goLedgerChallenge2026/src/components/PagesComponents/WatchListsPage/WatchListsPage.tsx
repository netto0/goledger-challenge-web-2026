import React, { useEffect } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import WatchListCard from "./WatchListCard";
import PageContainer from "../../PageContainer/PageContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import { watchListInitialValues } from "../../../types/WatchListType";
import LoadingComponent from "@/components/LoadingComponent/LoadingComponent";

export default function WatchListsPage() {
  const { watchLists, setNewWatchListInfos } = React.useContext(BasicsContext);
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
    <>
      {watchLists.length == 0 ? (
        <LoadingComponent />
      ) : (
        <PageContainer>
          <PageTitleContainer
            title="Popular Watch Lists"
            subTitle="As determined by users"
            toLink="/addWatchlist"
          />
          {watchLists?.map((e) => (
            <WatchListCard watchList={e} key={e["@key"]} />
          ))}
        </PageContainer>
      )}
    </>
  );
}
