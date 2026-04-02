import type { TvShowKeyType } from "./TvShowType";

export type WatchListType = {
  "@key": string;
  description: string;
  title: string;
  tvShows: TvShowKeyType[];
};

export const watchListInitialValues = {
  "@key": "",
  title: "",
  description: "",
  tvShows: [],
};
