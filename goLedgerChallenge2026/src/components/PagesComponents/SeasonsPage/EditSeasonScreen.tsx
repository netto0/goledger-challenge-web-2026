import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { updateSeasonService } from "../../../api/services/seasonsServices";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import EpisodeCard from "../EpisodesPage/EpisodeCard";

export default function EditSeasonScreen() {
  const {
    newSeasonInfos,
    setNewSeasonInfos,
    getTvShowBySeasonId,
    setActivePage,
    episodes,
  } = React.useContext(BasicsContext);

  const seasonEpisodes = episodes.filter(
    (ep) => ep.season["@key"] == newSeasonInfos["@key"],
  );

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title={`${getTvShowBySeasonId(newSeasonInfos["@key"])} #${newSeasonInfos.number}`}
          buttonType="back"
          buttonFunc={() => setActivePage("seasons")}
        />
        <InputComponent
          label="Year"
          type="number"
          value={newSeasonInfos.year}
          handleChange={(e) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              year: Number(e.target.value),
            })
          }
        />

        <h1
          style={{
            fontFamily: "Afacad",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
          id="sectionTitle"
        >
          Seasons
        </h1>
        {seasonEpisodes.map((episode) => (
          <EpisodeCard episode={episode} />
        ))}
        <ButtonComponent
          color="green"
          label="Enviar"
          onClickFunc={(e) => {
            e.preventDefault();
            updateSeasonService(
              newSeasonInfos.number,
              newSeasonInfos.tvShow["@key"],
              newSeasonInfos.year,
            );
          }}
        />
        <ButtonComponent
          color="red"
          label="DELETAR SEASON"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteItem(newSeasonInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
