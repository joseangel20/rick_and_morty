import { NavLink } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({
  onClose,
  id,
  name,
  image,
  onAbout,
  characters,
  setCharacters,
}) {
  return (
    <div className={styles.containerCard}>
      <button onClick={() => onClose(id, characters, setCharacters)}>X</button>
      <NavLink
        to={`/detail/${id}`}
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "black",
          };
        }}
      >
        <h4 className={styles.name}>{name.split(" ")[0]}</h4>
      </NavLink>

      <img src={image} alt="d" />
    </div>
  );
}
