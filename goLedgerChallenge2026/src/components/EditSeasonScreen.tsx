import React, { useEffect, useState } from "react";
import { BasicsContext } from "../contexts/BasicsContext";
import type { SeasonType } from "../types/SeasonType";
import {
  getSeasonByIdService,
  updateSeasonService,
} from "../api/services/seasonsServices";

type props = {
  number: number;
  tvShowKey: string;
};

export default function EditSeasonScreen({ number, tvShowKey }: props) {
  const initialValues = {
    "@key": "",
    number: number,
    tvShow: {
      "@assetType": "tvShows",
      "@key": tvShowKey,
    },
    year: 0,
  };

  const [editSeasonInfos, setEditSeasonInfos] =
    useState<SeasonType>(initialValues);

  useEffect(() => {
    const getSeason = async () => {
      const response = await getSeasonByIdService(number, tvShowKey);
      setEditSeasonInfos(response);
    };

    getSeason();
  }, []);

  const { getTvShowBySeasonId } = React.useContext(BasicsContext);

  return (
    <form action="" style={{ border: "solid 1px black" }}>
      <strong>Edit Season</strong>
      <h3>
        {getTvShowBySeasonId(editSeasonInfos["@key"])} -{" "}
        {editSeasonInfos.number}
      </h3>
      <span>Year: </span>
      <input
        type="number"
        value={editSeasonInfos.year}
        onChange={(e) =>
          setEditSeasonInfos({
            ...editSeasonInfos,
            year: Number(e.target.value),
          })
        }
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          updateSeasonService(
            editSeasonInfos.number,
            editSeasonInfos.tvShow["@key"],
            editSeasonInfos.year,
          );
        }}
      >
        Enviar
      </button>
    </form>
  );
}
