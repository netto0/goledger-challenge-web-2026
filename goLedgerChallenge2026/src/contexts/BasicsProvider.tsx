import { useState } from "react";
import { BasicsContext } from "./BasicsContext";
import type { TvShowType } from "../types/TvShowType";
import type { SeasonType } from "../types/SeasonType";
import type { EpisodeType } from "../types/EpisodeType";
import type { WatchListType } from "../types/WatchListType";
import { getTvShowsService } from "../api/services/tvShowsServices";
import { getSeasonsService } from "../api/services/seasonsServices";
import { getEpisodesService } from "../api/services/episodesServices";
import { getWatchListsService } from "../api/services/watchListsServices";

export const BasicsProvider = (props: { children: React.ReactNode }) => {
  const [tvShows, setTvShows] = useState<TvShowType[]>([]);
  const [seasons, setSeasons] = useState<SeasonType[]>([]);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [watchLists, setWatchLists] = useState<WatchListType[]>([]);

  const getTvShows = async () => {
    const tvShows = await getTvShowsService();
    setTvShows(tvShows);
  };

  const getSeasons = async () => {
    const seasons = await getSeasonsService();
    setSeasons(seasons);
  };

  const getEpisodes = async () => {
    const episodes = await getEpisodesService();
    setEpisodes(episodes);
  };

  const getWatchLists = async () => {
    const watchLists = await getWatchListsService();
    setWatchLists(watchLists);
  };

  function getTvShowTitle(tvShowKey: string): string {
    return tvShows.filter((t) => t["@key"] == tvShowKey)[0]?.title;
  }

  function getEpisodesCount(seasonKey: string): number {
    return episodes.filter((ep) => ep.season["@key"] == seasonKey).length;
  }

  function getSeasonNumber(seasonKey: string): number {
    return seasons.filter((s) => s["@key"] == seasonKey)[0]?.number;
  }

  function getTvShowBySeasonId(seasonKey: string): string {
    const tvShowId = seasons.filter((season) => season["@key"] == seasonKey)[0]
      .tvShow["@key"];
    return tvShows.filter((tvShow) => tvShow["@key"] == tvShowId)[0]?.title;
  }

  return (
    <BasicsContext.Provider
      value={{
        tvShows,
        setTvShows,
        seasons,
        setSeasons,
        episodes,
        setEpisodes,
        watchLists,
        setWatchLists,
        getTvShows,
        getSeasons,
        getEpisodes,
        getWatchLists,
        getTvShowTitle,
        getEpisodesCount,
        getSeasonNumber,
        getTvShowBySeasonId,
      }}
    >
      {props.children}
    </BasicsContext.Provider>
  );
};
