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

const getEpisodeByIdService = async (
  seasonKey: string,
  episodeNumber: number,
) => {
  const response = await axios.post(
    `${baseUrl}/query/readAsset`,
    {
      key: {
        "@assetType": "episodes",
        season: {
          "@assetType": "seasons",
          "@key": seasonKey,
        },
        episodeNumber: episodeNumber,
      },
    },
    {
      auth: authPayload,
    },
  );
  return response.data;
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

const updateEpisodeService = async (
  seasonKey: string,
  episodeNumber: number,
  title: string,
  releaseDate: string,
  description: string,
  rating: number,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/updateAsset`,
      {
        update: {
          "@assetType": "episodes",
          season: {
            "@assetType": "seasons",
            "@key": seasonKey,
          },
          episodeNumber: episodeNumber,
          title: title,
          releaseDate: releaseDate,
          description: description,
          rating: rating,
        },
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

export {
  getEpisodesService,
  getEpisodeByIdService,
  addEpisodeService,
  updateEpisodeService,
};
