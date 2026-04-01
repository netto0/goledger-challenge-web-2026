import { AxiosError } from "axios";
import { getItensByType } from "../axios";

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

export { getSeasonsService };
