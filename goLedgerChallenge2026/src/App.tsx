import { useEffect, useState } from "react";
import { getTvShowsService } from "./api/services/tvShowsServices";
import "./App.css";
import type { TvShowType } from "./types/TvShowType";
import type { SeasonType } from "./types/SeasonType";
import { getSeasonsService } from "./api/services/seasonsServices";
import type { EpisodeType } from "./types/EpisodeType";
import { getEpisodesService } from "./api/services/episodesServices";
import type { WatchListType } from "./types/WatchListType";
import { getWatchListsService } from "./api/services/watchListsServices";

function App() {
  const [tvShows, setTvShows] = useState<TvShowType[]>([]);
  const [seasons, setSeasons] = useState<SeasonType[]>([]);
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [watchLists, setWatchLists] = useState<WatchListType[]>([]);

  useEffect(() => {
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

    getTvShows();
    getSeasons();
    getEpisodes();
    getWatchLists();
  }, []);

  return (
    <>
      <strong>GO LEDGER CHALLENGE 2026</strong>

      <h1>TV SHOWS</h1>
      {tvShows?.map((e) => (
        <div key={e["@key"]}>
          <span>{e.title}</span> - <span>{e.recommendedAge}</span>{" "}
          <p>{e.description}</p>
        </div>
      ))}

      <h1>SEASONS</h1>
      {seasons?.map((e) => (
        <div key={e["@key"]}>
          <span>{e.tvShow["@key"]}</span> - <span>{e.number}</span> -{" "}
          <span>{e.year}</span>
        </div>
      ))}

      <h1>EPISODES</h1>
      {episodes?.map((e) => (
        <div key={e["@key"]}>
          <span>{e.title}</span> - <span>{e.episodeNumber}</span> -{" "}
          <span>{e.rating}</span> - <span>{e.releaseDate}</span> -{" "}
          <span>{e.season["@key"]}</span>
        </div>
      ))}

      <h1>WATCHLISTS</h1>
      {watchLists?.map((e) => (
        <div key={e["@key"]}>
          <strong>{e.title}</strong>
          <p>{e.description}</p>
          {e.tvShows.map((tvShow) => (
            <p key={tvShow["@key"]}>{tvShow["@key"]}</p>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
