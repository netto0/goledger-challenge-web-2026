import React, { useEffect, useState } from "react";
import { updateEpisodeService } from "../../../api/services/episodesServices";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import ChakraInput from "@/components/ChakraComponents/ChakraInput";
import ChakraTextArea from "@/components/ChakraComponents/ChakraTextArea";
import ChakraDateTimePicker from "@/components/ChakraComponents/ChakraDateTimePicker";
import type { DateValue } from "@chakra-ui/react";
import { parseAbsolute } from "@internationalized/date";
import { getDateTimeString } from "@/components/utils/dateTimeFunctions";
import { upperLevel } from "@/components/utils/routeFunctions";
import { useLocation } from "react-router";

export default function EditEpisodeScreen() {
  const {
    getSeasonNumber,
    newEpisodeInfos,
    setNewEpisodeInfos,
    getTvShowBySeasonId,
    setActivePage,
    setIsLoading,
  } = React.useContext(BasicsContext);

  const [dateValue, setDateValue] = useState<DateValue[]>([
    parseAbsolute(newEpisodeInfos.releaseDate, "UTC"),
  ]);

  async function updateEpisode(
    seasonKey: string,
    episodeNumber: number,
    title: string,
    releaseDate: string,
    description: string,
    rating: number,
  ) {
    try {
      setIsLoading(true);
      await updateEpisodeService(
        seasonKey,
        episodeNumber,
        title,
        releaseDate,
        description,
        rating,
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteEpisode(key: string) {
    try {
      setIsLoading(true);
      await deleteItem(key);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setNewEpisodeInfos({
      ...newEpisodeInfos,
      releaseDate: getDateTimeString(
        dateValue[0].year,
        dateValue[0].month,
        dateValue[0].day,
      ),
    });
  }, [dateValue]);

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title={`${getTvShowBySeasonId(newEpisodeInfos.season["@key"])} S${getSeasonNumber(newEpisodeInfos.season["@key"])} Ep${newEpisodeInfos.episodeNumber}`}
          buttonType="back"
          buttonFunc={() => setActivePage("episodes")}
          toLink={upperLevel(useLocation().pathname)}
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
          color="green"
          label="Enviar"
          onClickFunc={(e) => {
            e.preventDefault();
            updateEpisode(
              newEpisodeInfos.season["@key"],
              newEpisodeInfos.episodeNumber,
              newEpisodeInfos.title,
              newEpisodeInfos.releaseDate,
              newEpisodeInfos.description,
              newEpisodeInfos.rating,
            );
          }}
        />

        <ChakraButton
          color="red"
          label="DELETAR EP"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteEpisode(newEpisodeInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
