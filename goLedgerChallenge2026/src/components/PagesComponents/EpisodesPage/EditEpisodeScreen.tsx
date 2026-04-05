import React from "react";
import { updateEpisodeService } from "../../../api/services/episodesServices";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import ChakraInputComponent from "@/components/ChakraComponents/ChakraInputComponent";

export default function EditEpisodeScreen() {
  const {
    getSeasonNumber,
    newEpisodeInfos,
    setNewEpisodeInfos,
    getTvShowBySeasonId,
    setActivePage,
  } = React.useContext(BasicsContext);

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title={`${getTvShowBySeasonId(newEpisodeInfos.season["@key"])} S${getSeasonNumber(newEpisodeInfos.season["@key"])} Ep${newEpisodeInfos.episodeNumber}`}
          buttonType="back"
          buttonFunc={() => setActivePage("episodes")}
        />

        <ChakraInputComponent
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

        <InputComponent
          label="Release date"
          type="text"
          value={newEpisodeInfos.releaseDate}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              releaseDate: e.target.value,
            })
          }
        />

        <ChakraInputComponent
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

        <InputComponent
          label="Description"
          type="textarea"
          value={newEpisodeInfos.description}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              description: e.target.value,
            })
          }
        />

        <ButtonComponent
          color="green"
          label="Enviar"
          onClickFunc={(e) => {
            e.preventDefault();
            updateEpisodeService(
              newEpisodeInfos.season["@key"],
              newEpisodeInfos.episodeNumber,
              newEpisodeInfos.title,
              newEpisodeInfos.releaseDate,
              newEpisodeInfos.description,
              newEpisodeInfos.rating,
            );
          }}
        />

        <ButtonComponent
          color="red"
          label="DELETAR EP"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteItem(newEpisodeInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
