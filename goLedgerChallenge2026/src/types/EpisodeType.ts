export type EpisodeType = {
  "@key": string;
  description: string;
  episodeNumber: number;
  rating: number;
  releaseDate: string;
  season: {
    "@assetType": "seasons";
    "@key": string;
  };
  title: string;
};
