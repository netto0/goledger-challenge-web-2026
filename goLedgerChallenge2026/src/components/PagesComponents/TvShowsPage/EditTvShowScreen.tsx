import React from "react";
import { updateTvShowService } from "../../../api/services/tvShowsServices";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import { BasicsContext } from "../../../contexts/BasicsContext";
import SeasonCard from "../SeasonsPage/SeasonCard";
import ChakraInput from "@/components/ChakraComponents/ChakraInput";
import ChakraTextArea from "@/components/ChakraComponents/ChakraTextArea";

export default function EditTvShowScreen() {
  const {
    newTvShowInfos,
    setNewTvShowInfos,
    setActivePage,
    seasons,
    setIsLoading,
  } = React.useContext(BasicsContext);

  const tvShowSeasons = seasons.filter(
    (s) => s.tvShow["@key"] == newTvShowInfos["@key"],
  );

  async function updateTvShow(
    title: string,
    description: string,
    recommendedAge: number,
  ) {
    try {
      setIsLoading(true);
      await updateTvShowService(title, description, recommendedAge);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteTvShow(key: string) {
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
          title={newTvShowInfos.title}
          buttonType="back"
          buttonFunc={() => setActivePage("tvShows")}
        />

        <ChakraTextArea
          label="Description"
          placeholder="Enter the Tv Show name..."
          value={newTvShowInfos.description}
          onChange={(e) =>
            setNewTvShowInfos({
              ...newTvShowInfos,
              description: e.target.value,
            })
          }
        />

        <ChakraInput
          type="number"
          label="Recommended Age"
          placeholder="Enter the recommended age..."
          value={newTvShowInfos.recommendedAge}
          onChange={(e) =>
            setNewTvShowInfos({
              ...newTvShowInfos,
              recommendedAge: Number(e.target.value),
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
          Seasons: {tvShowSeasons.length}
        </h1>
        {tvShowSeasons.map((season) => (
          <SeasonCard season={season} />
        ))}

        <ChakraButton
          color="green"
          label="UPDATE SHOW"
          onClickFunc={(e) => {
            e.preventDefault();
            updateTvShow(
              newTvShowInfos.title,
              newTvShowInfos.description,
              newTvShowInfos.recommendedAge,
            );
          }}
        />

        <ChakraButton
          color="red"
          label="DELETE SHOW"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteTvShow(newTvShowInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
