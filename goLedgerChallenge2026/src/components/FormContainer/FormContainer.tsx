import type React from "react";
import styles from "./FormContainer.module.css";

type props = { children: React.ReactNode };

export default function FormContainer({ children }: props) {
  return <form className={styles.formContainer}>{children}</form>;
}
