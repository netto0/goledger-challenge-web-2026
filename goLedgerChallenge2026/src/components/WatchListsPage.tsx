import React from "react";
import { BasicsContext } from "../contexts/BasicsContext";
import { addWatchListService } from "../api/services/watchListsServices";
import EditWatchListScreen from "./EditWatchListScreen";

export default function WatchListsPage() {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (option) => ({
      "@assetType": "tvShows",
      "@key": option.value,
    }));
    setNewWatchListInfos({ ...newWatchListInfos, tvShows: values });
  };

  const {
    watchLists,
    getTvShowTitle,
    newWatchListInfos,
    setNewWatchListInfos,
    tvShows,
  } = React.useContext(BasicsContext);
  return (
    <div style={{ backgroundColor: "purple" }}>
      <h1>WATCHLISTS</h1>
      <div style={{ display: "flex", border: "solid 1px red" }}>
        <form action="" style={{ border: "solid 1px black" }}>
          <br />
          <strong>Add New Watch List</strong>
          <br />

          <span>Title: </span>
          <input
            type="text"
            value={newWatchListInfos.title}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
            ) =>
              setNewWatchListInfos({
                ...newWatchListInfos,
                title: e.target.value,
              })
            }
          />

          <br />
          <span>Description: </span>
          <textarea
            value={newWatchListInfos.description}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
            ) =>
              setNewWatchListInfos({
                ...newWatchListInfos,
                description: e.target.value,
              })
            }
          ></textarea>

          <br />
          <span>Tv Shows: </span>

          <select multiple={true} onChange={(e) => handleChange(e)}>
            <option value="default"></option>
            {tvShows.map((tvShow) => (
              <option key={tvShow["@key"]} value={tvShow["@key"]}>
                {tvShow.title}
              </option>
            ))}
          </select>

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              addWatchListService(
                newWatchListInfos.title,
                newWatchListInfos.description,
                newWatchListInfos.tvShows,
              );
            }}
          >
            Enviar
          </button>
        </form>
        <EditWatchListScreen title="ssssssssssssssssssssssss"/>
      </div>

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
    </div>
  );
}
