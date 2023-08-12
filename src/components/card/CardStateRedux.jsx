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
  characters,
  setCharacters,
}) {
  const nameClick = <h4 className={styles.name}>{name.split(" ")[0]}</h4>;
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
      return;
    }

    setIsFav(true);
    dispatch(addFav({ id, name, image }));
  };

  useEffect(() => {
    //   myFavorites.forEach((fav)=>{
    //     if(fav.id === id){
    //       setIsFav(true);
    //     }
    //   });

    for (let fav of myFavorites) {
      if (fav.id === id) {
        setIsFav(true);
      }
    }
  }, [myFavorites]);

  return (
    <div className={styles.containerCard}>
      <button className={styles.favorite} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
      <button
        className={styles.cerrar}
        onClick={() => onClose(id, characters, setCharacters)}
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
