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

import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router";

export const paletteColorBase = "gray";

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
    <>
      <ToastContainer />
      <div className={styles.mainContainer}>
        <HeaderComponent />
        <>
          <Routes>
            <Route index element={<TvShowsPage />} />
            <Route path="/tvShows" element={<TvShowsPage />} />
            <Route path="/addTvShow" element={<TvShowForm />} />
            <Route path="/editTvShow" element={<EditTvShowScreen />} />

            <Route path="/seasons" element={<SeasonsPage />} />
            <Route path="/addSeason" element={<SeasonForm />} />
            <Route path="/editSeason" element={<EditSeasonScreen />} />

            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/addEpisode" element={<EpisodeForm />} />
            <Route path="/editEpisode" element={<EditEpisodeScreen />} />

            <Route path="/watchlists" element={<WatchListsPage />} />
            <Route path="/addWatchlist" element={<WatchListForm />} />
            <Route path="/editWatchlist" element={<EditWatchListScreen />} />
          </Routes>
        </>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
