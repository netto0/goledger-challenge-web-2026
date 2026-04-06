import styles from "./LoadingComponent.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function LoadingComponent() {
  return (
    <div className={styles.container}>
      <AiOutlineLoading3Quarters />
    </div>
  );
}
