export type SeasonType = {
  "@key": string;
  number: number;
  tvShow: {
    "@assetType": "tvShows";
    "@key": string;
  };
  year: number;
};
