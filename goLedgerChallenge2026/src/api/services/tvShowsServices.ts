import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";

const getTvShowsService = async () => {
  try {
    const response = await getItensByType("tvShows");
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

const getTvShowByIdService = async (title: string) => {
  const response = await axios.post(
    `${baseUrl}/query/readAsset`,
    {
      key: {
        "@assetType": "tvShows",
        title: title,
      },
    },
    {
      auth: authPayload,
    },
  );
  return response.data.result;
};

export { getTvShowsService, getTvShowByIdService };
