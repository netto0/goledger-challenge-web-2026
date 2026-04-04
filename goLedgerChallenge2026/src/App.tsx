import React, { useEffect } from "react";
import "./App.css";
import TvShowsPage from "./components/PagesComponents/TvShowsPage/TvShowsPage";
import { BasicsContext } from "./contexts/BasicsContext";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";
import WatchListsPage from "./components/PagesComponents/WatchListsPage/WatchListsPage";
import SeasonsPage from "./components/PagesComponents/SeasonsPage/SeasonsPage";
import EpisodesPage from "./components/PagesComponents/EpisodesPage/EpisodesPage";
import TvShowForm from "./components/PagesComponents/TvShowsPage/TvShowForm";
import SeasonForm from "./components/PagesComponents/SeasonsPage/SeasonForm";
import EpisodeForm from "./components/PagesComponents/EpisodesPage/EpisodeForm";
import WatchListForm from "./components/PagesComponents/WatchListsPage/WatchListForm";

function App() {
  const { getTvShows, getSeasons, getEpisodes, getWatchLists, activePage } =
    React.useContext(BasicsContext);

  useEffect(() => {
    getTvShows();
    getSeasons();
    getEpisodes();
    getWatchLists();
  }, []);

  return (
    <div style={{ backgroundColor: "white", color: "black" }}>
      <HeaderComponent />
      {activePage == "tvShows" && <TvShowsPage />}
      {activePage == "addTvShow" && <TvShowForm />}
      {activePage == "seasons" && <SeasonsPage />}
      {activePage == "addSeason" && <SeasonForm />}
      {activePage == "episodes" && <EpisodesPage />}
      {activePage == "addEpisode" && <EpisodeForm />}
      {activePage == "watchlists" && <WatchListsPage />}
      {activePage == "addWatchlist" && <WatchListForm />}
      <FooterComponent />
    </div>
  );
}

export default App;
