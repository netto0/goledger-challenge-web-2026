export type SeasonType = {
  "@key": string;
  number: number;
  tvShow: {
    "@assetType": string;
    "@key": string;
  };
  year: number;
};

export const seasonInitialValues = {
  "@key": "",
  number: 0,
  tvShow: { "@assetType": "tvShows", "@key": "" },
  year: 0,
};
