export type EpisodeType = {
  "@key": string;
  description: string;
  episodeNumber: number;
  rating: number;
  releaseDate: string;
  season: {
    "@assetType": string;
    "@key": string;
  };
  title: string;
};

export const episodeInitialValues = {
  "@key": "",
  description: "",
  episodeNumber: 0,
  rating: 0,
  releaseDate: "",
  season: { "@assetType": "seasons", "@key": "" },
  title: "",
};
