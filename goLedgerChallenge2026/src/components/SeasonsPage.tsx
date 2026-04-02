import React from "react";
import { BasicsContext } from "../contexts/BasicsContext";
import { addSeasonService } from "../api/services/seasonsServices";

export default function SeasonsPage() {
  const {
    seasons,
    getTvShowTitle,
    getEpisodesCount,
    newSeasonInfos,
    setNewSeasonInfos,
  } = React.useContext(BasicsContext);

  return (
    <div style={{ backgroundColor: "cyan" }}>
      <h1>SEASONS PAGE</h1>

      <form action="">
        <br />
        <strong>Add New Season</strong>
        <br />

        <span>Tv Show key: </span>
        <input
          type="text"
          value={newSeasonInfos.tvShow["@key"]}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              tvShow: { ...newSeasonInfos.tvShow, "@key": e.target.value },
            })
          }
        />
        <br />

        <span>Number: </span>
        <input
          type="number"
          value={newSeasonInfos.number}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              number: Number(e.target.value),
            })
          }
        />
        <br />

        <span>Year: </span>
        <input
          type="number"
          value={newSeasonInfos.year}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) =>
            setNewSeasonInfos({
              ...newSeasonInfos,
              year: Number(e.target.value),
            })
          }
        />
        <br />

        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            addSeasonService(
              newSeasonInfos.number,
              newSeasonInfos.tvShow["@key"],
              newSeasonInfos.year,
            );
          }}
        >
          Enviar
        </button>
      </form>

      <br />
      {seasons?.map((e) => (
        <div key={e["@key"]}>
          <span>{getTvShowTitle(e.tvShow["@key"])}</span> -{" "}
          <span>{e.number}</span> - <span>{e.year}</span> -{" "}
          <span>{getEpisodesCount(e["@key"])}</span>
        </div>
      ))}
    </div>
  );
}
