import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addWatchListService } from "../../../api/services/watchListsServices";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import SelectComponent from "../../SelectComponent/SelectComponent";
// import EditWatchListScreen from "./EditWatchListScreen";

export default function WatchListForm() {
  const { tvShows, newWatchListInfos, setNewWatchListInfos } =
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
        <PageTitleContainer title="Add New Watch List" />

        <InputComponent
          label="Title"
          type="text"
          value={newWatchListInfos.title}
          handleChange={(e) =>
            setNewWatchListInfos({
              ...newWatchListInfos,
              title: e.target.value,
            })
          }
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

        {/* <span>Tv Shows: </span>

        <select multiple={true} onChange={(e) => handleChange(e)}>
          <option value="default"></option>
          {tvShows.map((tvShow) => (
            <option key={tvShow["@key"]} value={tvShow["@key"]}>
              {tvShow.title}
            </option>
          ))}
        </select> */}

        <SelectComponent
          label="Tv Shows"
          optionsList={tvShows}
          handleChange={handleChange}
        />

        <ButtonComponent
          label="Enviar"
          color="green"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addWatchListService(
              newWatchListInfos.title,
              newWatchListInfos.description,
              newWatchListInfos.tvShows,
            );
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
{
  /* <EditWatchListScreen title="ssssssssssssssssssssssss" /> */
}
