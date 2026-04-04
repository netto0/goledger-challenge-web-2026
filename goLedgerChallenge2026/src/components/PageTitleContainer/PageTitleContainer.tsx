import styles from "./PageTitleContainer.module.css";
import { FiPlusCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";

type props = {
  title: string;
  subTitle?: string;
  buttonFunc?: () => void;
  buttonType?: "plus" | "back";
};

export default function PageTitleContainer({
  title,
  subTitle,
  buttonFunc,
  buttonType = "plus",
}: props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1>{title}</h1>
        {subTitle ? subTitle : <br />}
      </div>
      {buttonType == "plus" ? (
        <FiPlusCircle onClick={buttonFunc} />
      ) : (
        <FiArrowLeftCircle onClick={buttonFunc} />
      )}
    </div>
  );
}
