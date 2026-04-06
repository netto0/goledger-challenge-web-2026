import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { updateSeasonService } from "../../../api/services/seasonsServices";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import EpisodeCard from "../EpisodesPage/EpisodeCard";
import ChakraInput from "@/components/ChakraComponents/ChakraInput";

export default function EditSeasonScreen() {
  const {
    newSeasonInfos,
    setNewSeasonInfos,
    getTvShowBySeasonId,
    setActivePage,
    episodes,
    setIsLoading,
  } = React.useContext(BasicsContext);

  const seasonEpisodes = episodes.filter(
    (ep) => ep.season["@key"] == newSeasonInfos["@key"],
  );

  async function updateSeason(number: number, tvShowKey: string, year: number) {
    try {
      setIsLoading(true);
      await updateSeasonService(number, tvShowKey, year);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteSeason(key: string) {
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
          title={`${getTvShowBySeasonId(newSeasonInfos["@key"])} #${newSeasonInfos.number}`}
          buttonType="back"
          buttonFunc={() => setActivePage("seasons")}
        />
        <ChakraInput
          type="number"
          label="Year"
          value={newSeasonInfos.year}
          onChange={(e) =>
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
        <ChakraButton
          color="green"
          label="Enviar"
          onClickFunc={(e) => {
            e.preventDefault();
            updateSeason(
              newSeasonInfos.number,
              newSeasonInfos.tvShow["@key"],
              newSeasonInfos.year,
            );
          }}
        />
        <ChakraButton
          color="red"
          label="DELETAR SEASON"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteSeason(newSeasonInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
