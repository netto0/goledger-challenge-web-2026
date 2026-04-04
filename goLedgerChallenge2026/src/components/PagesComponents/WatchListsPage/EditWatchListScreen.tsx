import React, { useEffect, useState } from "react";
import type { WatchListType } from "../../../types/WatchListType";
import {
  getWatchListByIdService,
  updateWatchListService,
} from "../../../api/services/watchListsServices";
import { BasicsContext } from "../../../contexts/BasicsContext";
import { deleteItem } from "../../../api/axios";

type props = {
  title: string;
};

export default function EditWatchListScreen({ title }: props) {
  const { tvShows } = React.useContext(BasicsContext);

  const initialValues = {
    "@key": "",
    title: title,
    description: "",
    tvShows: [],
  };

  const [editWatchListInfos, setEditWatchListInfos] =
    useState<WatchListType>(initialValues);

  useEffect(() => {
    const getWatchList = async () => {
      const response = await getWatchListByIdService(title);
      setEditWatchListInfos(response);
    };

    getWatchList();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const values = Array.from(e.target.selectedOptions, (option) => ({
      "@assetType": "tvShows",
      "@key": option.value,
    }));
    setEditWatchListInfos({ ...editWatchListInfos, tvShows: values });
  };

  return (
    <form action="" style={{ border: "solid 1px black" }}>
      <strong>Edit Watch List</strong>
      {JSON.stringify(editWatchListInfos)}
      <h3>{editWatchListInfos.title}</h3>
      <span>Description: </span>
      <textarea
        value={editWatchListInfos.description}
        onChange={(e) =>
          setEditWatchListInfos({
            ...editWatchListInfos,
            description: e.target.value,
          })
        }
      />
      <br />v<span>Tv Shows: </span>
      <select multiple={true} onChange={(e) => handleChange(e)}>
        <option value="default"></option>
        {tvShows.map((tvShow) => (
          <option key={tvShow["@key"]} value={tvShow["@key"]}>
            {tvShow.title}
          </option>
        ))}
      </select>
      <button
        onClick={(e) => {
          e.preventDefault();
          updateWatchListService(
            editWatchListInfos.title,
            editWatchListInfos.tvShows,
            editWatchListInfos.description,
          );
        }}
      >
        Enviar
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteItem(editWatchListInfos["@key"]);
        }}
      >
        DELETAR WATCH LIST
      </button>
    </form>
  );
}
