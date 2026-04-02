export type TvShowType = {
  "@key": string;
  title: string;
  recommendedAge: number;
  description: string;
};

export type TvShowKeyType = {
  "@assetType": string;
  "@key": string;
};

export const tvShowInitialValues = {
  "@key": "",
  title: "",
  recommendedAge: 0,
  description: "",
};
