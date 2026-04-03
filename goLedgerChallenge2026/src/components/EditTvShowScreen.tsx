import { useEffect, useState } from "react";
import {
  getTvShowByIdService,
  updateTvShowService,
} from "../api/services/tvShowsServices";
import type { TvShowType } from "../types/TvShowType";
import { deleteItem } from "../api/axios";

type props = {
  title: string;
};

export default function EditTvShowScreen({ title }: props) {
  const initialValues = {
    "@key": "",
    title: title,
    recommendedAge: 0,
    description: "",
  };

  const [editTvShowInfos, setEditTvShowInfos] =
    useState<TvShowType>(initialValues);

  useEffect(() => {
    const getTvShow = async () => {
      const response = await getTvShowByIdService(title);
      setEditTvShowInfos(response);
    };

    getTvShow();
  }, []);

  return (
    <form action="" style={{ border: "solid 1px black" }}>
      <strong>Edit Tv Show</strong>
      <h3>{editTvShowInfos.title}</h3>
      <span>Description: </span>
      <textarea
        value={editTvShowInfos.description}
        onChange={(e) =>
          setEditTvShowInfos({
            ...editTvShowInfos,
            description: e.target.value,
          })
        }
      />
      <br />
      <span>Recommended Age: </span>
      <input
        type="number"
        value={editTvShowInfos.recommendedAge}
        onChange={(e) =>
          setEditTvShowInfos({
            ...editTvShowInfos,
            recommendedAge: Number(e.target.value),
          })
        }
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          updateTvShowService(
            editTvShowInfos.title,
            editTvShowInfos.description,
            editTvShowInfos.recommendedAge,
          );
        }}
      >
        Enviar
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteItem(editTvShowInfos["@key"]);
        }}
      >
        DELETAR SHOW
      </button>
    </form>
  );
}
