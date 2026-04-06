import React, { useEffect, useState } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addWatchListService } from "../../../api/services/watchListsServices";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import ChakraInput from "@/components/ChakraComponents/ChakraInput";
import ChakraTextArea from "@/components/ChakraComponents/ChakraTextArea";
import ChakraList from "@/components/ChakraComponents/ChakraList";
import { createListCollection } from "@chakra-ui/react";
import type { TvShowKeyType } from "@/types/TvShowType";
import { useLocation } from "react-router";
import { upperLevel } from "@/components/utils/routeFunctions";

export default function WatchListForm() {
  const {
    tvShows,
    newWatchListInfos,
    setNewWatchListInfos,
    setActivePage,
    setIsLoading,
    navigate,
    getWatchLists,
  } = React.useContext(BasicsContext);

  const tvShowsArray: { label: string; value: string }[] = [];
  const [tvShowsListValue, setTvShowsListValue] = useState<string[]>([]);

  useEffect(() => {
    setNewWatchListInfos({
      ...newWatchListInfos,
      tvShows: tvShowsListValue.map((tvShow) => ({
        "@assetType": "tvShows",
        "@key": tvShow,
      })),
    });
  }, [tvShowsListValue]);

  tvShows.map((tvShow) =>
    tvShowsArray.push({ label: tvShow.title, value: tvShow["@key"] }),
  );

  const tvShowsCollection = createListCollection({
    items: tvShowsArray,
  });

  async function addWatchList(
    title: string,
    description: string,
    tvShows: TvShowKeyType[],
  ) {
    try {
      setIsLoading(true);
      const response = await addWatchListService(title, description, tvShows);
      if (response) {
        navigate(-1);
        getWatchLists();
      }
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
          title="Add New Watch List"
          buttonType="back"
          buttonFunc={() => setActivePage("watchlists")}
          toLink={upperLevel(useLocation().pathname)}
        />

        <ChakraInput
          type="text"
          label="Title"
          placeholder="Enter the watchlist title..."
          value={newWatchListInfos.title}
          onChange={(e) =>
            setNewWatchListInfos({
              ...newWatchListInfos,
              title: e.target.value,
            })
          }
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
          label="Enviar"
          color="green"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addWatchList(
              newWatchListInfos.title,
              newWatchListInfos.description,
              newWatchListInfos.tvShows,
            );
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
