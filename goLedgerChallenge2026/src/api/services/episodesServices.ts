import { AxiosError } from "axios";
import { getItensByType } from "../axios";

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

export { getEpisodesService };
