import styles from "./App.module.css";
import React, { useEffect } from "react";
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
import EditTvShowScreen from "./components/PagesComponents/TvShowsPage/EditTvShowScreen";
import EditSeasonScreen from "./components/PagesComponents/SeasonsPage/EditSeasonScreen";
import EditEpisodeScreen from "./components/PagesComponents/EpisodesPage/EditEpisodeScreen";
import EditWatchListScreen from "./components/PagesComponents/WatchListsPage/EditWatchListScreen";

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
    <div className={styles.mainContainer}>
      <HeaderComponent />
      {activePage == "tvShows" && <TvShowsPage />}
      {activePage == "addTvShow" && <TvShowForm />}
      {activePage == "editTvShow" && <EditTvShowScreen />}
      {activePage == "seasons" && <SeasonsPage />}
      {activePage == "addSeason" && <SeasonForm />}
      {activePage == "editSeason" && <EditSeasonScreen />}
      {activePage == "episodes" && <EpisodesPage />}
      {activePage == "addEpisode" && <EpisodeForm />}
      {activePage == "editEpisode" && <EditEpisodeScreen />}
      {activePage == "watchlists" && <WatchListsPage />}
      {activePage == "addWatchlist" && <WatchListForm />}
      {activePage == "editWatchlist" && <EditWatchListScreen />}
      <FooterComponent />
    </div>
  );
}

export default App;
