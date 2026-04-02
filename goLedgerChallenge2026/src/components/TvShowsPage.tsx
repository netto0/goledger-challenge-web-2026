import type { SeasonType } from "../types/SeasonType";
import type { TvShowType } from "../types/TvShowType";

type props = {
  tvShows: TvShowType[];
  seasons: SeasonType[];
};

export default function TvShowsPage({ tvShows, seasons }: props) {
  function getSeasonsCount(tvShowKey: string): number {
    return seasons.filter((s) => s.tvShow["@key"] == tvShowKey).length;
  }
  return (
    <div>
      <h1>TV SHOWS PAGE</h1>

      <br />
      <strong>Add New Tv Show</strong>
      <br />

      <span>Title: </span>
      <input type="text" />

      <br />
      <span>Description: </span>
      <textarea></textarea>

      <br />
      <span>Recommended Age: </span>
      <input type="number" name="" id="" />

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
