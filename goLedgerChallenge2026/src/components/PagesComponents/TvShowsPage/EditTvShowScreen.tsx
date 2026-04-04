import React from "react";
import { updateTvShowService } from "../../../api/services/tvShowsServices";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import { BasicsContext } from "../../../contexts/BasicsContext";

export default function EditTvShowScreen() {
  const { newTvShowInfos, setNewTvShowInfos, setActivePage } =
    React.useContext(BasicsContext);

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

        <ButtonComponent
          color="green"
          label="Enviar"
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
          label="DELETAR SHOW"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteItem(newTvShowInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
