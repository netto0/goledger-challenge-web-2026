import React from "react";
import { updateWatchListService } from "../../../api/services/watchListsServices";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { deleteItem } from "../../../api/axios";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import SelectComponent from "../../SelectComponent/SelectComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";

export default function EditWatchListScreen() {
  const { tvShows, newWatchListInfos, setNewWatchListInfos, setActivePage } =
    React.useContext(BasicsContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (option) => ({
      "@assetType": "tvShows",
      "@key": option.value,
    }));
    setNewWatchListInfos({ ...newWatchListInfos, tvShows: values });
  };

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title={newWatchListInfos.title}
          buttonType="back"
          buttonFunc={() => setActivePage("watchlists")}
        />
        <InputComponent
          label="Description"
          type="textarea"
          value={newWatchListInfos.description}
          handleChange={(e) =>
            setNewWatchListInfos({
              ...newWatchListInfos,
              description: e.target.value,
            })
          }
        />
        <SelectComponent
          label="Tv Shows"
          optionsList={tvShows}
          handleChange={(e) => handleChange(e)}
        />
        <ButtonComponent
          color="green"
          label="Enviar"
          onClickFunc={(e) => {
            e.preventDefault();
            updateWatchListService(
              newWatchListInfos.title,
              newWatchListInfos.tvShows,
              newWatchListInfos.description,
            );
          }}
        />

        <ButtonComponent
          color="red"
          label="DELETAR WATCH LIST"
          onClickFunc={(e) => {
            e.preventDefault();
            deleteItem(newWatchListInfos["@key"]);
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
