import { AxiosError } from "axios";
import { getItensByType } from "../axios";

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

export { getWatchListsService };
