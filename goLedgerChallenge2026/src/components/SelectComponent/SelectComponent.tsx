import type { TvShowType } from "../../types/TvShowType";
import styles from "./SelectComponent.module.css";

type props = {
  label: string;
  optionsList: TvShowType[];
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => void;
};

export default function SelectComponent({
  label,
  optionsList,
  handleChange,
}: props) {
  return (
    <div className={styles.selectContainer}>
      <label>{label}</label>
      <select
        className={styles.select}
        multiple={true}
        onChange={(e) => handleChange(e)}
      >
        <option value="default"></option>
        {optionsList.map((option) => (
          <option key={option["@key"]} value={option["@key"]}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
