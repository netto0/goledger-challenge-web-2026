import React, { useEffect, useState } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addSeasonService } from "../../../api/services/seasonsServices";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import ChakraSelect from "@/components/ChakraComponents/ChakraSelect";
import { createListCollection } from "@chakra-ui/react";
import ChakraInput from "@/components/ChakraComponents/ChakraInput";

export default function SeasonForm() {
  const {
    newSeasonInfos,
    setNewSeasonInfos,
    setActivePage,
    tvShows,
    setIsLoading,
  } = React.useContext(BasicsContext);
  const [tvShowValue, setTvShowValue] = useState<string[]>([]);

  const tvShowsArray: { label: string; value: string }[] = [];
  tvShows.map((tvShow) =>
    tvShowsArray.push({ label: tvShow.title, value: tvShow["@key"] }),
  );

  const tvShowsCollection = createListCollection({
    items: tvShowsArray,
  });

  async function addSeason(number: number, tvShowKey: string, year: number) {
    try {
      setIsLoading(true);
      await addSeasonService(number, tvShowKey, year);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

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

        <ChakraInput
          type="number"
          label="Number"
          placeholder="Enter the season number..."
          value={newSeasonInfos.number}
          onChange={(e) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              number: Number(e.target.value),
            })
          }
        />

        <ChakraInput
          type="number"
          label="Year"
          placeholder="Enter the season release year..."
          value={newSeasonInfos.year}
          onChange={(e) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              year: Number(e.target.value),
            })
          }
        />

        <ChakraButton
          label="Enviar"
          color="green"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addSeason(
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
