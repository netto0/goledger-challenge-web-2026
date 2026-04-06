import React, { useEffect, useState } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addEpisodeService } from "../../../api/services/episodesServices";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import ChakraSelect from "@/components/ChakraComponents/ChakraSelect";
import { createListCollection, type DateValue } from "@chakra-ui/react";
import ChakraDateTimePicker from "@/components/ChakraComponents/ChakraDateTimePicker";
import ChakraInput from "@/components/ChakraComponents/ChakraInput";
import ChakraTextArea from "@/components/ChakraComponents/ChakraTextArea";
import { upperLevel } from "@/components/utils/routeFunctions";
import { useLocation } from "react-router";

export default function EpisodeForm() {
  const {
    newEpisodeInfos,
    setNewEpisodeInfos,
    setActivePage,
    tvShows,
    seasons,
    setIsLoading,
  } = React.useContext(BasicsContext);

  const [tvShowValue, setTvShowValue] = useState<string[]>([]);
  const [seasonValue, setSeasonValue] = useState<string[]>([]);
  const [dateValue, setDateValue] = useState<DateValue[]>([]);

  const tvShowsArray: { label: string; value: string }[] = [];

  tvShows.map((tvShow) =>
    tvShowsArray.push({ label: tvShow.title, value: tvShow["@key"] }),
  );

  const tvShowsCollection = createListCollection({
    items: tvShowsArray,
  });

  const getSeasonsArray = () => {
    if (!tvShowValue.length) return [];

    return seasons
      .filter((season) => season.tvShow["@key"] === tvShowValue[0])
      .map((s) => ({
        label: s.number.toString(),
        value: s["@key"],
      }));
  };

  async function addEpisode(
    description: string,
    episodeNumber: number,
    rating: number,
    releaseDate: string,
    seasonKey: string,
    title: string,
  ) {
    try {
      setIsLoading(true);
      await addEpisodeService(
        description,
        episodeNumber,
        rating,
        releaseDate,
        seasonKey,
        title,
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setNewEpisodeInfos({
      ...newEpisodeInfos,
      season: { ...newEpisodeInfos.season, "@key": seasonValue[0] },
    });
  }, [seasonValue]);

  useEffect(() => {
    setNewEpisodeInfos({
      ...newEpisodeInfos,
      releaseDate: `${dateValue.toString()}T00:00:00Z`,
    });
  }, [dateValue]);

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title="Add New Episode"
          buttonType="back"
          buttonFunc={() => setActivePage("episodes")}
          toLink={upperLevel(useLocation().pathname)}
        />

        <ChakraSelect
          label="Select Tv Show"
          listCollection={tvShowsCollection}
          value={tvShowValue}
          setValue={setTvShowValue}
        />

        <ChakraSelect
          label="Select a season"
          listCollection={createListCollection({
            items: getSeasonsArray(),
          })}
          value={seasonValue}
          setValue={setSeasonValue}
          disabled={getSeasonsArray().length == 0}
        />

        <ChakraInput
          type="number"
          label="Number"
          placeholder="Enter the episode number..."
          value={newEpisodeInfos.episodeNumber}
          onChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              episodeNumber: Number(e.target.value),
            })
          }
        />

        <ChakraInput
          type="text"
          label="Title"
          placeholder="Enter the episode title..."
          value={newEpisodeInfos.title}
          onChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              title: e.target.value,
            })
          }
        />

        <div style={{ display: "flex", gap: "1rem" }}>
          <ChakraDateTimePicker
            label="Release Date"
            value={dateValue}
            setValue={setDateValue}
          />

          <ChakraInput
            type="number"
            label="Rating"
            placeholder="Enter the episode rating..."
            value={newEpisodeInfos.rating}
            onChange={(e) =>
              setNewEpisodeInfos({
                ...newEpisodeInfos,
                rating: Number(e.target.value),
              })
            }
          />
        </div>

        <ChakraTextArea
          label="Description"
          placeholder="Enter the episode description..."
          value={newEpisodeInfos.description}
          onChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              description: e.target.value,
            })
          }
        />

        <ChakraButton
          label="Enviar"
          color="green"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addEpisode(
              newEpisodeInfos.description,
              newEpisodeInfos.episodeNumber,
              newEpisodeInfos.rating,
              newEpisodeInfos.releaseDate,
              newEpisodeInfos.season["@key"],
              newEpisodeInfos.title,
            );
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
