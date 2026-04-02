import React from "react";
import { BasicsContext } from "../contexts/BasicsContext";
import { addEpisodeService } from "../api/services/episodesServices";

export default function EpisodesPage() {
  const {
    episodes,
    getTvShowBySeasonId,
    getSeasonNumber,
    newEpisodeInfos,
    setNewEpisodeInfos,
  } = React.useContext(BasicsContext);
  return (
    <div style={{ backgroundColor: "brown" }}>
      <h1>EPISODES</h1>

      <form action="">
        <br />
        <strong>Add New Episode</strong>
        <br />

        <span>Season key: </span>
        <input
          type="text"
          value={newEpisodeInfos.season["@key"]}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              season: { ...newEpisodeInfos.season, "@key": e.target.value },
            })
          }
        />
        <br />

        <span>Number: </span>
        <input
          type="number"
          value={newEpisodeInfos.episodeNumber}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              episodeNumber: Number(e.target.value),
            })
          }
        />
        <br />

        <span>Title: </span>
        <input
          type="text"
          value={newEpisodeInfos.title}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              title: e.target.value,
            })
          }
        />
        <br />

        <span>Release Date: </span>
        <input
          type="text"
          value={newEpisodeInfos.releaseDate}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              releaseDate: e.target.value,
            })
          }
        />
        <br />

        <span>Description: </span>
        <textarea
          value={newEpisodeInfos.description}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
          ) =>
            setNewEpisodeInfos({
              ...newEpisodeInfos,
              description: e.target.value,
            })
          }
        />
        <br />

        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addEpisodeService(
              newEpisodeInfos.description,
              newEpisodeInfos.episodeNumber,
              newEpisodeInfos.rating,
              newEpisodeInfos.releaseDate,
              newEpisodeInfos.season["@key"],
              newEpisodeInfos.title,
            );
          }}
        >
          Enviar
        </button>
      </form>

      {episodes?.map((e) => (
        <div key={e["@key"]}>
          <span>{e.title}</span> - <span>{e.episodeNumber}</span> -{" "}
          <span>{e.rating}</span> - <span>{e.releaseDate}</span> -{" "}
          <span>{getTvShowBySeasonId(e.season["@key"])}</span> -{" "}
          <span>Temp: {getSeasonNumber(e.season["@key"])}</span>
        </div>
      ))}
    </div>
  );
}
