import React from "react";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { addTvShowService } from "../../../api/services/tvShowsServices";
import PageTitleContainer from "../../PageTitleContainer/PageTitleContainer";
import PageContainer from "../../PageContainer/PageContainer";
import ChakraButton from "../../ChakraComponents/ChakraButton";
import FormContainer from "../../FormContainer/FormContainer";
import ChakraInput from "@/components/ChakraComponents/ChakraInput";
import ChakraTextArea from "@/components/ChakraComponents/ChakraTextArea";
import { upperLevel } from "@/components/utils/routeFunctions";
import { useLocation } from "react-router";

export default function TvShowForm() {
  const {
    newTvShowInfos,
    setNewTvShowInfos,
    setActivePage,
    setIsLoading,
    getTvShows,
    navigate,
  } = React.useContext(BasicsContext);

  async function addTvShow(
    title: string,
    description: string,
    recommendedAge: number,
  ) {
    try {
      setIsLoading(true);
      const response = await addTvShowService(
        title,
        description,
        recommendedAge,
      );
      if (response) {
        navigate(-1);
        getTvShows();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <PageContainer>
        <FormContainer>
          <PageTitleContainer
            title="Add new Tv Show"
            buttonType="back"
            buttonFunc={() => setActivePage("tvShows")}
            toLink={upperLevel(useLocation().pathname)}
          />

          <ChakraInput
            type="text"
            label="Title"
            placeholder="Enter the Tv Show name..."
            value={newTvShowInfos.title}
            onChange={(e) =>
              setNewTvShowInfos({ ...newTvShowInfos, title: e.target.value })
            }
          />

          <ChakraTextArea
            label="Description"
            placeholder="Enter the Tv Show description..."
            value={newTvShowInfos.description}
            onChange={(e) =>
              setNewTvShowInfos({
                ...newTvShowInfos,
                description: e.target.value,
              })
            }
          />

          <ChakraInput
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

          <ChakraButton
            label="ADD NEW SHOW"
            color="green"
            onClickFunc={(
              e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
            ) => {
              e.preventDefault();
              addTvShow(
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
