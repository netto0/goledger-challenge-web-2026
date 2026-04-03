import React, { useEffect, useState } from "react";
import type { EpisodeType } from "../types/EpisodeType";
import {
  getEpisodeByIdService,
  updateEpisodeService,
} from "../api/services/episodesServices";
import { BasicsContext } from "../contexts/BasicsContext";

type props = {
  episodeNumber: number;
  seasonKey: string;
};

export default function EditEpisodeScreen({ episodeNumber, seasonKey }: props) {
  const { getTvShowBySeasonId, getSeasonNumber } =
    React.useContext(BasicsContext);
  const initialValues = {
    "@key": "",
    season: {
      "@assetType": "seasons",
      "@key": seasonKey,
    },
    episodeNumber: episodeNumber,
    title: "",
    description: "",
    releaseDate: "",
    rating: 0,
  };

  const [editEpisodeInfos, setEditEpisodeInfos] =
    useState<EpisodeType>(initialValues);

  useEffect(() => {
    const getEpisode = async () => {
      const response = await getEpisodeByIdService(seasonKey, episodeNumber);
      setEditEpisodeInfos(response);
    };

    getEpisode();
  }, []);

  return (
    <form action="" style={{ border: "solid 1px black" }}>
      {JSON.stringify(editEpisodeInfos)}
      <strong>Edit Tv Show</strong>
      <h3>
        <span>{getTvShowBySeasonId(seasonKey)}</span> -{" "}
        <span>S{getSeasonNumber(seasonKey)}</span> - Ep
        <span>{editEpisodeInfos.episodeNumber}</span>
      </h3>

      <span>Title: </span>
      <input
        type="text"
        value={editEpisodeInfos.title}
        onChange={(e) =>
          setEditEpisodeInfos({
            ...editEpisodeInfos,
            title: e.target.value,
          })
        }
      />
      <br />

      <span>Release date: </span>
      <input
        type="text"
        value={editEpisodeInfos.releaseDate}
        onChange={(e) =>
          setEditEpisodeInfos({
            ...editEpisodeInfos,
            releaseDate: e.target.value,
          })
        }
      />
      <br />

      <span>Rating: </span>
      <input
        type="number"
        value={editEpisodeInfos.rating}
        onChange={(e) =>
          setEditEpisodeInfos({
            ...editEpisodeInfos,
            rating: Number(e.target.value),
          })
        }
      />

      <br />
      <span>Description: </span>
      <textarea
        value={editEpisodeInfos.description}
        onChange={(e) =>
          setEditEpisodeInfos({
            ...editEpisodeInfos,
            description: e.target.value,
          })
        }
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          updateEpisodeService(
            editEpisodeInfos.season["@key"],
            editEpisodeInfos.episodeNumber,
            editEpisodeInfos.title,
            editEpisodeInfos.releaseDate,
            editEpisodeInfos.description,
            editEpisodeInfos.rating,
          );
        }}
      >
        Enviar
      </button>
    </form>
  );
}
