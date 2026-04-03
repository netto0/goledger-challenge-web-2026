import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";
import type { TvShowKeyType } from "../../types/TvShowType";

const getWatchListsService = async () => {
  try {
    const response = await getItensByType("watchlist");
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return error.response.data;
    }
  }
};

const getWatchListByIdService = async (title: string) => {
  const response = await axios.post(
    `${baseUrl}/query/readAsset`,
    {
      key: {
        "@assetType": "watchlist",
        title: title,
      },
    },
    {
      auth: authPayload,
    },
  );
  return response.data;
};

const addWatchListService = async (
  title: string,
  description: string,
  tvShowsKeys: TvShowKeyType[],
) => {
  try {
    const fmtKeyList: TvShowKeyType[] = [];
    tvShowsKeys.map((tvShowKey) =>
      fmtKeyList.push({ "@assetType": "tvShows", "@key": tvShowKey["@key"] }),
    );

    const response = await axios.post(
      `${baseUrl}/invoke/createAsset`,
      {
        asset: [
          {
            "@assetType": "watchlist",
            description: description,
            title: title,
            tvShows: fmtKeyList,
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

const updateWatchListService = async (
  title: string,
  tvShows: TvShowKeyType[],
  description: string,
) => {
  try {
    console.log(tvShows);
    const response = await axios.post(
      `${baseUrl}/invoke/updateAsset`,
      {
        update: {
          "@assetType": "watchlist",
          title: title,
          tvShows: tvShows,
          description: description,
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
  getWatchListsService,
  getWatchListByIdService,
  addWatchListService,
  updateWatchListService,
};
