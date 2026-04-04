import type React from "react";
import styles from "./PageContainer.module.css";

type props = { children: React.ReactNode };

export default function PageContainer({ children }: props) {
  return <div className={styles.container}>{children}</div>;
}
