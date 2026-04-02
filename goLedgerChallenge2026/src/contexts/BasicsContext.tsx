import { createContext } from "react";
import type { TvShowType } from "../types/TvShowType";
import type { SeasonType } from "../types/SeasonType";
import type { EpisodeType } from "../types/EpisodeType";
import type { WatchListType } from "../types/WatchListType";

type BasicsType = {
  tvShows: TvShowType[];
  setTvShows: React.Dispatch<React.SetStateAction<TvShowType[]>>;
  seasons: SeasonType[];
  setSeasons: React.Dispatch<React.SetStateAction<SeasonType[]>>;
  episodes: EpisodeType[];
  setEpisodes: React.Dispatch<React.SetStateAction<EpisodeType[]>>;
  watchLists: WatchListType[];
  setWatchLists: React.Dispatch<React.SetStateAction<WatchListType[]>>;
  getTvShows: () => Promise<void>;
  getSeasons: () => Promise<void>;
  getEpisodes: () => Promise<void>;
  getWatchLists: () => Promise<void>;
  getTvShowTitle: (tvShowKey: string) => string;
  getEpisodesCount: (seasonKey: string) => number;
  getSeasonNumber: (seasonKey: string) => number;
  getTvShowBySeasonId: (seasonKey: string) => string;
};

export const BasicsContext = createContext<BasicsType>({
  tvShows: [],
  setTvShows: () => {},
  seasons: [],
  setSeasons: () => {},
  episodes: [],
  setEpisodes: () => {},
  watchLists: [],
  setWatchLists: () => {},
  getTvShows: async () => {},
  getSeasons: async () => {},
  getEpisodes: async () => {},
  getWatchLists: async () => {},
  getTvShowTitle: () => "",
  getEpisodesCount: () => 0,
  getSeasonNumber: () => 0,
  getTvShowBySeasonId: () => "",
});
