/* eslint-disable array-callback-return */
import { useSelector } from "react-redux";
import Card from "../card/Card";
import styles from "../cards/Cards.module.css";

const showCard = (char, onClose) => {
  return (
    <Card
      key={char.id.toString()}
      id={char.id}
      name={char.name}
      image={char.image}
      onClose={onClose}
      fav={true}
      // characters={props.characters}
      // setCharacters={props.setCharacters}
    />
  );
};

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const onClose = (id, dispatch, removeFav, setIsFav) => {
    setIsFav(false);
    dispatch(removeFav(id));
  };

  return (
    <div className={styles.containerCards}>
      {myFavorites.map((char) => {
        return showCard(char, onClose);
      })}
    </div>
  );
};

export default Favorites;
