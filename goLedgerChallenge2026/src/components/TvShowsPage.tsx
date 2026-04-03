import React from "react";
import { BasicsContext } from "../contexts/BasicsContext";
import { addTvShowService } from "../api/services/tvShowsServices";
import EditTvShowScreen from "./EditTvShowScreen";

export default function TvShowsPage() {
  const { seasons, tvShows, newTvShowInfos, setNewTvShowInfos } =
    React.useContext(BasicsContext);

  function getSeasonsCount(tvShowKey: string): number {
    return seasons.filter((s) => s.tvShow["@key"] == tvShowKey).length;
  }
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>TV SHOWS PAGE</h1>

      <div style={{ display: "flex", border: "solid 1px red" }}>
        <form action="" style={{ border: "solid 1px black" }}>
          <strong>Add New Tv Show</strong>
          <br />

          <span>Title: </span>
          <input
            type="text"
            value={newTvShowInfos.title}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
            ) =>
              setNewTvShowInfos({ ...newTvShowInfos, title: e.target.value })
            }
          />

          <br />
          <span>Description: </span>
          <textarea
            value={newTvShowInfos.description}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
            ) =>
              setNewTvShowInfos({
                ...newTvShowInfos,
                description: e.target.value,
              })
            }
          ></textarea>

          <br />
          <span>Recommended Age: </span>
          <input
            type="number"
            value={newTvShowInfos.recommendedAge}
            onChange={(
              e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
            ) =>
              setNewTvShowInfos({
                ...newTvShowInfos,
                recommendedAge: Number(e.target.value),
              })
            }
          />

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
              e.preventDefault();
              addTvShowService(
                newTvShowInfos.title,
                newTvShowInfos.description,
                newTvShowInfos.recommendedAge,
              );
            }}
          >
            Enviar
          </button>
        </form>

        <EditTvShowScreen title="Supernatural"/>
      </div>

      <h1>TV SHOWS</h1>
      {tvShows?.map((e) => (
        <div key={e["@key"]}>
          <strong>{e.title}</strong> - <span>Age: {e.recommendedAge}</span> -{" "}
          <span>Seasons:{getSeasonsCount(e["@key"])}</span>
          <p>Desc.: {e.description}</p>
        </div>
      ))}
    </div>
  );
}
