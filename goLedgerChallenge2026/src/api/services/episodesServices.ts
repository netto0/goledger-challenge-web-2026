import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";

const getEpisodesService = async () => {
  try {
    const response = await getItensByType("episodes");
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

const addEpisodeService = async (
  description: string,
  episodeNumber: number,
  rating: number,
  releaseDate: string,
  seasonKey: string,
  title: string,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/createAsset`,
      {
        asset: [
          {
            "@assetType": "episodes",
            description: description,
            episodeNumber: episodeNumber,
            rating: rating,
            releaseDate: releaseDate,
            season: {
              "@assetType": "seasons",
              "@key": seasonKey,
            },
            title: title,
          },
        ],
      },
      {
        auth: authPayload,
      },
    );
    location.reload();
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

export { getEpisodesService, addEpisodeService };
