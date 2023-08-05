import { NavLink } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({
  onClose,
  id,
  name,
  image,
  characters,
  setCharacters,
}) {
  const nameClick = <h4 className={styles.name}>{name.split(" ")[0]}</h4>;

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
        {nameClick}
      </NavLink>
      <img src={image} alt={name} />
    </div>
  );
}
