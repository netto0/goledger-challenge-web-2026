import axios, { AxiosError } from "axios";
import type { AssetType } from "../types/AssetType";
import { failToast, successToast } from "@/components/utils/toasts";

const baseUrl = import.meta.env.VITE_BASE_URL;

const authPayload = {
  username: import.meta.env.VITE_USERNAME,
  password: import.meta.env.VITE_PASSWORD,
};

const getItensByType = async (type: AssetType) => {
  const response = await axios.post(
    `${baseUrl}/query/search`,
    {
      query: {
        selector: {
          "@assetType": type,
        },
      },
    },
    {
      auth: authPayload,
    },
  );
  return response.data.result;
};

const deleteItem = async (itemKey: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/invoke/deleteAsset`, {
      data: {
        key: {
          "@key": itemKey,
        },
        cascade: true,
      },
      auth: authPayload,
    });
    // location.reload();
    successToast("Item sucessfully deleted!");
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
      return error.response.data;
    }
  }
};

export { baseUrl, authPayload, getItensByType, deleteItem };
