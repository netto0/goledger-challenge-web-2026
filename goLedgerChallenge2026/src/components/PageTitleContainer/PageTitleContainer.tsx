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
        <div className={styles.titleSubContainer}>
          {buttonType == "back" && <FiArrowLeftCircle onClick={buttonFunc} />}
          <h1>{title}</h1>
        </div>
        {subTitle ? subTitle : <br />}
      </div>
      {buttonType == "plus" && <FiPlusCircle onClick={buttonFunc} />}
    </div>
  );
}
