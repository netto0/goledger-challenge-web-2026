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
// import LoadingComponent from "./components/LoadingComponent/LoadingComponent";

export const paletteColorBase = "gray";

function App() {
  const {
    getTvShows,
    getSeasons,
    getEpisodes,
    getWatchLists,
    // activePage,
    // isLoading,
  } = React.useContext(BasicsContext);

  useEffect(() => {
    getTvShows();
    getSeasons();
    getEpisodes();
    getWatchLists();
  }, []);

  return (
    <>
      {/* {JSON.stringify(useLocation().pathname)} */}
      {/* {JSON.stringify(upperLevel("/tvShows/addTvShow"))} */}

      <ToastContainer />
      <div className={styles.mainContainer}>
        <HeaderComponent />
        {/* {isLoading ? (
          <LoadingComponent />
        ) : (
          <>
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
          </>
        )} */}
        <>
          <Routes>
            <Route index element={<TvShowsPage />} />
            <Route path="/tvShows" element={<TvShowsPage />} />
            <Route path="/tvShows/addTvShow" element={<TvShowForm />} />
            <Route path="/tvShows/editTvShow" element={<EditTvShowScreen />} />

            <Route path="/seasons" element={<SeasonsPage />} />
            <Route path="/seasons/addSeason" element={<SeasonForm />} />
            <Route path="/seasons/editSeason" element={<EditSeasonScreen />} />

            <Route path="/episodes" element={<EpisodesPage />} />
            <Route path="/episodes/addEpisode" element={<EpisodeForm />} />
            <Route
              path="/episodes/editEpisode"
              element={<EditEpisodeScreen />}
            />

            <Route path="/watchlists" element={<WatchListsPage />} />
            <Route
              path="/watchlists/addWatchlist"
              element={<WatchListForm />}
            />
            <Route
              path="/watchlists/editWatchlist"
              element={<EditWatchListScreen />}
            />
          </Routes>

          {/* {activePage == "tvShows" && <TvShowsPage />}
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
          {activePage == "editWatchlist" && <EditWatchListScreen />} */}
        </>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
