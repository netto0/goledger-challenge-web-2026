import { useState } from "react";
import { BasicsContext } from "./BasicsContext";
import { tvShowInitialValues, type TvShowType } from "../types/TvShowType";
import { seasonInitialValues, type SeasonType } from "../types/SeasonType";
import { episodeInitialValues, type EpisodeType } from "../types/EpisodeType";
import {
  watchListInitialValues,
  type WatchListType,
} from "../types/WatchListType";
import { getTvShowsService } from "../api/services/tvShowsServices";
import { getSeasonsService } from "../api/services/seasonsServices";
import { getEpisodesService } from "../api/services/episodesServices";
import { getWatchListsService } from "../api/services/watchListsServices";
import { useNavigate } from "react-router";

export type ActivePageType =
  | "tvShows"
  | "addTvShow"
  | "editTvShow"
  | "seasons"
  | "addSeason"
  | "editSeason"
  | "episodes"
  | "addEpisode"
  | "editEpisode"
  | "watchlists"
  | "addWatchlist"
  | "editWatchlist";

export const BasicsProvider = (props: { children: React.ReactNode }) => {
  const [tvShows, setTvShows] = useState<TvShowType[]>([]);
  const [seasons, setSeasons] = useState<SeasonType[]>([]);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [watchLists, setWatchLists] = useState<WatchListType[]>([]);
  const [newTvShowInfos, setNewTvShowInfos] =
    useState<TvShowType>(tvShowInitialValues);
  const [newSeasonInfos, setNewSeasonInfos] =
    useState<SeasonType>(seasonInitialValues);
  const [newEpisodeInfos, setNewEpisodeInfos] =
    useState<EpisodeType>(episodeInitialValues);
  const [newWatchListInfos, setNewWatchListInfos] = useState<WatchListType>(
    watchListInitialValues,
  );
  const [activePage, setActivePage] = useState<ActivePageType>("tvShows");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  const navigate = useNavigate();

  const getTvShows = async () => {
    try {
      setIsLoading(true);
      setLoadingPage(true);
      const tvShows = await getTvShowsService();
      setTvShows(tvShows);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setLoadingPage(false);
    }
  };

  const getSeasons = async () => {
    try {
      setIsLoading(true);
      setLoadingPage(true);
      const seasons = await getSeasonsService();
      setSeasons(seasons);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setLoadingPage(false);
    }
  };

  const getEpisodes = async () => {
    try {
      setIsLoading(true);
      setLoadingPage(true);
      const episodes = await getEpisodesService();
      setEpisodes(episodes);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setLoadingPage(false);
    }
  };

  const getWatchLists = async () => {
    try {
      setIsLoading(true);
      setLoadingPage(true);
      const watchLists = await getWatchListsService();
      setWatchLists(watchLists);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      setLoadingPage(false);
    }
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
    try {
      const tvShowId = seasons.filter(
        (season) => season["@key"] == seasonKey,
      )[0].tvShow["@key"];
      return tvShows.filter((tvShow) => tvShow["@key"] == tvShowId)[0]?.title;
    } catch {
      return "";
    }
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
        newTvShowInfos,
        setNewTvShowInfos,
        newSeasonInfos,
        setNewSeasonInfos,
        newEpisodeInfos,
        setNewEpisodeInfos,
        newWatchListInfos,
        setNewWatchListInfos,
        activePage,
        setActivePage,
        isLoading,
        setIsLoading,
        loadingPage,
        setLoadingPage,
        navigate,
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
