import styles from "./PageTitleContainer.module.css";
import { FiPlusCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router";

type props = {
  title: string;
  subTitle?: string;
  buttonFunc?: () => void;
  buttonType?: "plus" | "back";
  toLink?: string;
};

export default function PageTitleContainer({
  title,
  subTitle,
  buttonFunc,
  buttonType = "plus",
  toLink = "",
}: props) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleSubContainer}>
          {buttonType == "back" && (
            <Link to={toLink}>
              <FiArrowLeftCircle onClick={buttonFunc} />
            </Link>
          )}
          <h1>{title}</h1>
        </div>
        {subTitle ? subTitle : <br />}
      </div>
      {buttonType == "plus" && (
        <Link to={toLink}>
          <FiPlusCircle onClick={buttonFunc} />
        </Link>
      )}
    </div>
  );
}
