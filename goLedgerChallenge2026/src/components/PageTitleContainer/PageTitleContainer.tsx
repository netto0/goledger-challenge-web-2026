import { BasicsContext } from "@/contexts/BasicsContext";
import styles from "./PageTitleContainer.module.css";
import { FiPlusCircle } from "react-icons/fi";
import { FiArrowLeftCircle } from "react-icons/fi";
import React from "react";

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
  buttonType = "plus",
  toLink = "",
}: props) {
  const { navigate } = React.useContext(BasicsContext);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.titleSubContainer}>
          {buttonType == "back" && (
            <FiArrowLeftCircle onClick={() => navigate(-1)} />
          )}
          <h1>{title}</h1>
        </div>
        {subTitle ? subTitle : <br />}
      </div>
      {buttonType == "plus" && (
        <FiPlusCircle onClick={() => navigate(toLink)} />
      )}
    </div>
  );
}
