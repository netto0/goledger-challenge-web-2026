import React, { useEffect, useState } from "react";
import { updateWatchListService } from "../../../api/services/watchListsServices";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import ChakraTextArea from "@/components/ChakraComponents/ChakraTextArea";
import ChakraList from "@/components/ChakraComponents/ChakraList";
import { createListCollection } from "@chakra-ui/react";
import type { TvShowKeyType } from "@/types/TvShowType";
import { useLocation } from "react-router";
import { upperLevel } from "@/components/utils/routeFunctions";

export default function EditWatchListScreen() {
  const {
    tvShows,
    newWatchListInfos,
    setNewWatchListInfos,
    setActivePage,
    setIsLoading,
  } = React.useContext(BasicsContext);

  const [tvShowsListValue, setTvShowsListValue] = useState<string[]>(
    newWatchListInfos.tvShows.map((tvShow) => tvShow["@key"]),
  );

  useEffect(() => {
    setNewWatchListInfos({
      ...newWatchListInfos,
      tvShows: tvShowsListValue.map((tvShow) => ({
        "@assetType": "tvShows",
        "@key": tvShow,
      })),
    });
  }, [tvShowsListValue]);

  const tvShowsArray: { label: string; value: string }[] = [];

  tvShows.map((tvShow) =>
    tvShowsArray.push({ label: tvShow.title, value: tvShow["@key"] }),
  );

  const tvShowsCollection = createListCollection({
    items: tvShowsArray,
  });

  async function updateWatchList(
    title: string,
    tvShows: TvShowKeyType[],
    description: string,
  ) {
    try {
      setIsLoading(true);
      await updateWatchListService(title, tvShows, description);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteWatchList(key: string) {
    try {
      setIsLoading(true);
      await deleteItem(key);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title={newWatchListInfos.title}
          buttonType="back"
          buttonFunc={() => setActivePage("watchlists")}
          toLink={upperLevel(useLocation().pathname)}
        />

        <ChakraTextArea
          label="Description"
          placeholder="Enter the watchlist description..."
          value={newWatchListInfos.description}
          onChange={(e) =>
            setNewWatchListInfos({
              ...newWatchListInfos,
              description: e.target.value,
            })
          }
        />

        <ChakraList
          label="Tv Shows"
          listCollection={tvShowsCollection}
          value={tvShowsListValue}
          setValue={setTvShowsListValue}
        />

        <ChakraButton
          color="green"
          label="Enviar"
          onClickFunc={(e) => {
            e.preventDefault();
            updateWatchList(
              newWatchListInfos.title,
              newWatchListInfos.tvShows,
              newWatchListInfos.description,
            );
          }}
        />

        <ChakraButton
          color="red"
          label="DELETAR WATCH LIST"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteWatchList(newWatchListInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
