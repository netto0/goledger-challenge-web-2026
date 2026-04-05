import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addTvShowService } from "../../../api/services/tvShowsServices";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import FormContainer from "../../FormContainer/FormContainer";
import ChakraInputComponent from "@/components/ChakraComponents/ChakraInputComponent";

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

          <ChakraInputComponent
            type="text"
            label="Title"
            placeholder="Enter the Tv Show name..."
            value={newTvShowInfos.title}
            onChange={(e) =>
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

          <ChakraInputComponent
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
