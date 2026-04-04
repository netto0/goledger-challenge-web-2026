import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { updateSeasonService } from "../../../api/services/seasonsServices";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

export default function EditSeasonScreen() {
  const {
    newSeasonInfos,
    setNewSeasonInfos,
    getTvShowBySeasonId,
    setActivePage,
  } = React.useContext(BasicsContext);

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
