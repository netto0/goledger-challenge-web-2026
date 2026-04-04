import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import WatchListCard from "./WatchListCard";
import PageContainer from "../../PageContainer/PageContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";

export default function WatchListsPage() {
  const { watchLists, setActivePage } = React.useContext(BasicsContext);
  return (
    <PageContainer>
      <PageTitleContainer
        title="Popular Watch Lists"
        subTitle="As determined by users"
        buttonFunc={() => setActivePage("addWatchlist")}
      />
      {watchLists?.map((e) => (
        <WatchListCard watchList={e} key={e["@key"]} />
      ))}
    </PageContainer>
  );
}
