import { NavLink } from "react-router-dom";
import styles from "./card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Card({
  onClose,
  id,
  name,
  image,
  gender,
  characters,
  setCharacters,
  fav,
}) {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
      return;
    }
    setIsFav(true);
    addFav({ id, name, image, gender }).then((data) => {
      dispatch(data);
    });
  };
  useEffect(() => {
 
    for (let fav of myFavorites) {
      if (fav.id === id) {
        setIsFav(true);
      }
    }
  }, [id, myFavorites]);

  const nameClick = <h4 className={styles.name}>{name.split(" ")[0]}</h4>;

  return (
    <div className={styles.containerCard}>
      <button className={styles.favorite} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
      <button
        className={styles.cerrar}
        onClick={() => {
          if (fav) {
            onClose(id, removeFav, setIsFav);
          } else {
            onClose(id, characters, setCharacters);
            dispatch(removeFav(id));
          }
        }}
      >
        X
      </button>

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
