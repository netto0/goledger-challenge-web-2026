import React, { useEffect, useState } from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addEpisodeService } from "../../../api/services/episodesServices";
import PageContainer from "../../PageContainer/PageContainer";
import FormContainer from "../../FormContainer/FormContainer";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import InputComponent from "../../InputComponent/InputComponent";
import ButtonComponent from "../../ButtonComponent/ButtonComponent";
import ChakraSelect from "@/components/ChakraComponents/ChakraSelect";
import { createListCollection, type DateValue } from "@chakra-ui/react";
import ChakraDateTimePicker from "@/components/ChakraComponents/ChakraDateTimePicker";

export default function EpisodeForm() {
  const {
    newEpisodeInfos,
    setNewEpisodeInfos,
    setActivePage,
    tvShows,
    seasons,
  } = React.useContext(BasicsContext);

  const [tvShowValue, setTvShowValue] = useState<string[]>([]);
  const [seasonValue, setSeasonValue] = useState<string[]>([]);
  const [dateValue, setDateValue] = useState<DateValue[]>([]);

  const tvShowsArray: { label: string; value: string }[] = [];

  tvShows.map((tvShow) =>
    tvShowsArray.push({ label: tvShow.title, value: tvShow["@key"] }),
  );

  const tvShowsCollection = createListCollection({
    items: tvShowsArray,
  });

  const getSeasonsArray = () => {
    if (!tvShowValue.length) return [];

    return seasons
      .filter((season) => season.tvShow["@key"] === tvShowValue[0])
      .map((s) => ({
        label: s.number.toString(),
        value: s["@key"],
      }));
  };

  useEffect(() => {
    setNewEpisodeInfos({
      ...newEpisodeInfos,
      season: { ...newEpisodeInfos.season, "@key": seasonValue[0] },
    });
  }, [seasonValue]);

  useEffect(() => {
    setNewEpisodeInfos({
      ...newEpisodeInfos,
      releaseDate: `${dateValue.toString()}T00:00:00Z`,
    });
  }, [dateValue]);

  return (
    <PageContainer>
      <FormContainer>
        <PageTitleContainer
          title="Add New Episode"
          buttonType="back"
          buttonFunc={() => setActivePage("episodes")}
        />

        <ChakraSelect
          label="Select Tv Show"
          listCollection={tvShowsCollection}
          value={tvShowValue}
          setValue={setTvShowValue}
        />

        <ChakraSelect
          label="Select a season"
          listCollection={createListCollection({
            items: getSeasonsArray(),
          })}
          value={seasonValue}
          setValue={setSeasonValue}
          disabled={getSeasonsArray().length == 0}
        />

        <InputComponent
          label="Number"
          type="number"
          value={newEpisodeInfos.episodeNumber}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              episodeNumber: Number(e.target.value),
            })
          }
        />

        <InputComponent
          label="Title"
          type="text"
          value={newEpisodeInfos.title}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              title: e.target.value,
            })
          }
        />

        {/* <InputComponent
          label="Release Date"
          type="text"
          value={newEpisodeInfos.releaseDate}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              releaseDate: e.target.value,
            })
          }
        /> */}

        <ChakraDateTimePicker
          label="Release Date"
          value={dateValue}
          setValue={setDateValue}
        />

        <InputComponent
          label="Rating"
          type="number"
          value={newEpisodeInfos.rating}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              rating: Number(e.target.value),
            })
          }
        />

        <InputComponent
          label="Description"
          type="textarea"
          value={newEpisodeInfos.description}
          handleChange={(e) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              description: e.target.value,
            })
          }
        />

        <ButtonComponent
          label="Enviar"
          color="green"
          onClickFunc={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addEpisodeService(
              newEpisodeInfos.description,
              newEpisodeInfos.episodeNumber,
              newEpisodeInfos.rating,
              newEpisodeInfos.releaseDate,
              newEpisodeInfos.season["@key"],
              newEpisodeInfos.title,
            );
          }}
        />
      </FormContainer>
    </PageContainer>
  );
}
