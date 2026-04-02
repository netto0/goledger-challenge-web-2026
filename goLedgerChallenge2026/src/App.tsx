import React, { useEffect } from "react";
import "./App.css";
import TvShowsPage from "./components/TvShowsPage";
import { BasicsContext } from "./contexts/BasicsContext";
import SeasonsPage from "./components/SeasonsPage";
import EpisodesPage from "./components/EpisodesPage";
import WatchListsPage from "./components/WatchListsPage";

function App() {
  const { getTvShows, getSeasons, getEpisodes, getWatchLists } =
    React.useContext(BasicsContext);

  useEffect(() => {
    getTvShows();
    getSeasons();
    getEpisodes();
    getWatchLists();
  }, []);

  return (
    <div style={{ backgroundColor: "yellow" }}>
      <TvShowsPage />
      <SeasonsPage />
      <EpisodesPage />
      <WatchListsPage />
    </div>
  );
}

export default App;
