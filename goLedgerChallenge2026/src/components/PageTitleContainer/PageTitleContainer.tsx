import styles from "./PageTitleContainer.module.css";
import { FiPlusCircle } from "react-icons/fi";

type props = { title: string; subTitle?: string; buttonFunc?: () => void };

export default function PageTitleContainer({ title, subTitle, buttonFunc }: props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </div>
      <FiPlusCircle onClick={buttonFunc}/>
    </div>
  );
}
