import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addEpisodeService } from "../../../api/services/episodesServices";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

export default function EpisodeForm() {
  const { newEpisodeInfos, setNewEpisodeInfos, setActivePage } =
    React.useContext(BasicsContext);

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title="Add New Episode"
          buttonType="back"
          buttonFunc={() => setActivePage("episodes")}
        />

        <InputComponent
          label="Season key"
          type="text"
          value={newEpisodeInfos.season["@key"]}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              season: { ...newEpisodeInfos.season, "@key": e.target.value },
            })
          }
        />

        <InputComponent
          label="Number"
          type="number"
          value={newEpisodeInfos.episodeNumber}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              episodeNumber: Number(e.target.value),
            })
          }
        />

        <InputComponent
          label="Title"
          type="text"
          value={newEpisodeInfos.title}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              title: e.target.value,
            })
          }
        />

        <InputComponent
          label="Release Date"
          type="text"
          value={newEpisodeInfos.releaseDate}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              releaseDate: e.target.value,
            })
          }
        />

        <InputComponent
          label="Rating"
          type="number"
          value={newEpisodeInfos.rating}
          handleChange={(e) =>
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
          label="Enviar"
          color="green"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addEpisodeService(
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
