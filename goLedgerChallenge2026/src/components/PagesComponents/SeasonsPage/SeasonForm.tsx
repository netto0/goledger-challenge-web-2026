import React, { useEffect, useState } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addSeasonService } from "../../../api/services/seasonsServices";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import ChakraSelect from "@/components/ChakraComponents/ChakraSelect";
import { createListCollection } from "@chakra-ui/react";

export default function SeasonForm() {
  const { newSeasonInfos, setNewSeasonInfos, setActivePage, tvShows } =
    React.useContext(BasicsContext);
  const [tvShowValue, setTvShowValue] = useState<string[]>([]);

  const tvShowsArray: { label: string; value: string }[] = [];
  tvShows.map((tvShow) =>
    tvShowsArray.push({ label: tvShow.title, value: tvShow["@key"] }),
  );

  const tvShowsCollection = createListCollection({
    items: tvShowsArray,
  });

  useEffect(() => {
    setNewSeasonInfos({
      ...newSeasonInfos,
      tvShow: { ...newSeasonInfos.tvShow, "@key": tvShowValue[0] },
    });
  }, [tvShowValue]);

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title="Add new Season"
          buttonType="back"
          buttonFunc={() => setActivePage("seasons")}
        />

        <ChakraSelect
          label="Select Tv Show"
          listCollection={tvShowsCollection}
          value={tvShowValue}
          setValue={setTvShowValue}
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
}
