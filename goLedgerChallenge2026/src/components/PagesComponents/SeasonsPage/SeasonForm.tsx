import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addSeasonService } from "../../../api/services/seasonsServices";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
// import EditSeasonScreen from "./EditSeasonScreen";

export default function SeasonForm() {
  const { newSeasonInfos, setNewSeasonInfos } = React.useContext(BasicsContext);

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer title="Add new Season" />

        <InputComponent
          label="Tv Show Key"
          type="text"
          value={newSeasonInfos.tvShow["@key"]}
          handleChange={(e) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              tvShow: { ...newSeasonInfos.tvShow, "@key": e.target.value },
            })
          }
        />

        <InputComponent
          label="Number"
          type="number"
          value={newSeasonInfos.number}
          handleChange={(e) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              number: Number(e.target.value),
            })
          }
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
          label="Enviar"
          color="green"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addSeasonService(
              newSeasonInfos.number,
              newSeasonInfos.tvShow["@key"],
              newSeasonInfos.year,
            );
          }}
        />
      </FormContainer>
    </PageContainer>
  );
  {
    /* <EditSeasonScreen
        number={1}
        tvShowKey="tvShows:03fa3227-3e4a-593c-a730-d88495e511ca"
        /> */
  }
}
