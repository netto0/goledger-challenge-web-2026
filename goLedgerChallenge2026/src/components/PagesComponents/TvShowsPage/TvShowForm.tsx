import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addTvShowService } from "../../../api/services/tvShowsServices";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import FormContainer from "../../FormContainer/FormContainer";

export default function TvShowForm() {
  const { newTvShowInfos, setNewTvShowInfos, setActivePage } =
    React.useContext(BasicsContext);

  return (
    <div>
      <PageContainer>
        <FormContainer>
          <PageTitleContainer
            title="Add new Tv Show"
            buttonType="back"
            buttonFunc={() => setActivePage("tvShows")}
          />

          <InputComponent
            label="Title"
            type="text"
            value={newTvShowInfos.title}
            handleChange={(e) =>
              setNewTvShowInfos({ ...newTvShowInfos, title: e.target.value })
            }
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
          <ButtonComponent
            label="ADD NEW SHOW"
            color="green"
            onClickFunc={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
            ) => {
              e.preventDefault();
              addTvShowService(
                newTvShowInfos.title,
                newTvShowInfos.description,
                newTvShowInfos.recommendedAge,
              );
            }}
          />
        </FormContainer>
      </PageContainer>
    </div>
  );
}
