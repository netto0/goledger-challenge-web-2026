import React from "react";
import { updateTvShowService } from "../../../api/services/tvShowsServices";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { BasicsContext } from "../../../contexts/BasicsContext";
import SeasonCard from "../SeasonsPage/SeasonCard";

export default function EditTvShowScreen() {
  const { newTvShowInfos, setNewTvShowInfos, setActivePage, seasons } =
    React.useContext(BasicsContext);

  const tvShowSeasons = seasons.filter(
    (s) => s.tvShow["@key"] == newTvShowInfos["@key"],
  );

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title={newTvShowInfos.title}
          buttonType="back"
          buttonFunc={() => setActivePage("tvShows")}
        />
        <InputComponent
          label="Description"
          type="textarea"
          value={newTvShowInfos.description}
          handleChange={(e) =>
            setNewTvShowInfos({
              ...newTvShowInfos,
              description: e.target.value,
            })
          }
        />

        <InputComponent
          label="Recommended Age"
          type="number"
          value={newTvShowInfos.recommendedAge}
          handleChange={(e) =>
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

        <ButtonComponent
          color="green"
          label="UPDATE SHOW"
          onClickFunc={(e) => {
            e.preventDefault();
            updateTvShowService(
              newTvShowInfos.title,
              newTvShowInfos.description,
              newTvShowInfos.recommendedAge,
            );
          }}
        />

        <ButtonComponent
          color="red"
          label="DELETE SHOW"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteItem(newTvShowInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
