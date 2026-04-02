import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";

const getSeasonsService = async () => {
  try {
    const response = await getItensByType("seasons");
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

const addSeasonService = async (
  number: number,
  tvShowKey: string,
  year: number,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/createAsset`,
      {
        asset: [
          {
            "@assetType": "seasons",
            number: number,
            tvShow: { "@assetType": "tvShows", "@key": tvShowKey },
            year: year,
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

export { getSeasonsService, addSeasonService };
