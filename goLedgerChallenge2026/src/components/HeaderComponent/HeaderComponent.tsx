import styles from "./HeaderComponent.module.css";
import { NavLink } from "react-router";

export default function HeaderComponent() {
  return (
    <header className={styles.container}>
      <NavLink to="tvShows" className={styles.logo}>
        <span>
          Shows<span style={{ color: "#db5800" }}>index</span>
        </span>
      </NavLink>
      <nav>
        <NavLink to="tvShows">TvShows</NavLink>
        <NavLink to="seasons">Seasons</NavLink>
        <NavLink to="episodes">Episodes</NavLink>
        <NavLink to="watchlists">Watch Lists</NavLink>
      </nav>
    </header>
  );
}
