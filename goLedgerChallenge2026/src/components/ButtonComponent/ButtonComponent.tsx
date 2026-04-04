import styles from "./ButtonComponent.module.css";
type props = {
  label: string;
  color: "green" | "red";
  onClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export default function ButtonComponent({ label, color, onClickFunc }: props) {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      onClick={(e) => onClickFunc(e)}
    >
      {label}
    </button>
  );
}
