import React, { useEffect } from "react";
import "./App.css";
import TvShowsPage from "./components/TvShowsPage";
import { BasicsContext } from "./contexts/BasicsContext";

function App() {
  const {
    tvShows,
    seasons,
    episodes,
    watchLists,
    getTvShows,
    getSeasons,
    getEpisodes,
    getWatchLists,
    getTvShowTitle,
    getEpisodesCount,
    getTvShowBySeasonId,
    getSeasonNumber,
  } = React.useContext(BasicsContext);

  useEffect(() => {
    getTvShows();
    getSeasons();
    getEpisodes();
    getWatchLists();
  }, []);

  return (
    <>
      <TvShowsPage tvShows={tvShows} seasons={seasons} />

      <h1>SEASONS</h1>
      {seasons?.map((e) => (
        <div key={e["@key"]}>
          <span>{getTvShowTitle(e.tvShow["@key"])}</span> -{" "}
          <span>{e.number}</span> - <span>{e.year}</span> -{" "}
          <span>{getEpisodesCount(e["@key"])}</span>
        </div>
      ))}

      <h1>EPISODES</h1>
      {episodes?.map((e) => (
        <div key={e["@key"]}>
          <span>{e.title}</span> - <span>{e.episodeNumber}</span> -{" "}
          <span>{e.rating}</span> - <span>{e.releaseDate}</span> -{" "}
          <span>{getTvShowBySeasonId(e.season["@key"])}</span> -{" "}
          <span>Temp: {getSeasonNumber(e.season["@key"])}</span>
        </div>
      ))}

      <h1>WATCHLISTS</h1>
      {watchLists?.map((e) => (
        <div key={e["@key"]}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
          {e.tvShows.map((tvShow) => (
            <div key={tvShow["@key"]}>
              <u>{getTvShowTitle(tvShow["@key"])}</u>
              <br />
            </div>
          ))}
        </div>
      ))}
    </>
  );
}

export default App;
