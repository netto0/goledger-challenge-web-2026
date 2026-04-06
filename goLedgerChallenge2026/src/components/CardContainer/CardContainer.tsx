import styles from "./CardContainer.module.css";

type props = {
  children: React.ReactNode;
  onClick: () => void;
  cardKey: string;
};

export default function CardContainer({ children, cardKey, onClick }: props) {
  return (
    <div key={cardKey} className={styles.cardContainer} onClick={onClick}>
      {children}
    </div>
  );
}
