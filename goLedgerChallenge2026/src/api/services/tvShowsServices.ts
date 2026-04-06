import axios, { AxiosError } from "axios";
import { authPayload, baseUrl, getItensByType } from "../axios";
import { failToast, successToast } from "@/components/utils/toasts";

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
  console.log("exec " + title);
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
  return response.data;
};

const addTvShowService = async (
  title: string,
  description: string,
  recommendedAge: number,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/createAsset`,
      {
        asset: [
          {
            "@assetType": "tvShows",
            title: title,
            description: description,
            recommendedAge: recommendedAge,
          },
        ],
      },
      {
        auth: authPayload,
      },
    );
    successToast("Item added sucessfully!");
    // location.reload();
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      const errorCode = error.response.data.status;
      if (errorCode == 409) {
        failToast("This item is already registered");
      }
      if (errorCode == 404) {
        failToast("Item not found :/");
      }
    }
  }
};

const updateTvShowService = async (
  titleKey: string,
  description: string,
  recommendedAge: number,
) => {
  try {
    const response = await axios.post(
      `${baseUrl}/invoke/updateAsset`,
      {
        update: {
          "@assetType": "tvShows",
          title: titleKey,
          description: description,
          recommendedAge: recommendedAge,
        },
      },
      {
        auth: authPayload,
      },
    );
    successToast("Item updated sucessfully!");
    // location.reload();
    return response;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      failToast("Fail on item update!");
      return error.response.data;
    }
  }
};

export {
  getTvShowsService,
  getTvShowByIdService,
  addTvShowService,
  updateTvShowService,
};
