type TvShowListItemType = {
  "@assetType": string;
  "@key": string;
};

export type WatchListType = {
  "@key": string;
  description: string;
  title: string;
  tvShows: TvShowListItemType[];
};
