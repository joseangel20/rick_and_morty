/* eslint-disable array-callback-return */
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import styles from "../cards/Cards.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useEffect } from "react";

const showCard = (char, onClose) => {
  return (
    <Card
      key={char.id.toString()}
      id={char.id}
      name={char.name}
      image={char.image}
      gender={char.gender}
      onClose={onClose}
      fav={true}
    />
  );
};

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();

  const onClose = (id, removeFav, setIsFav) => {
    setIsFav(false);
    dispatch(removeFav(id));
  };

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  useEffect(() => {
    dispatch(orderCards("A"));
  }, [dispatch]);

  return (
    <>
      <div className={styles.select}>
        <select name="order" onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select name="gender" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.containerCards}>
        {myFavorites.map((char) => {
          return showCard(char, onClose);
        })}
      </div>
    </>
  );
};

export default Favorites;
