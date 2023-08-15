/* eslint-disable array-callback-return */
import { useSelector, useDispatch } from "react-redux";
import Card from "../card/Card";
import styles from "../cards/Cards.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

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

const optionOrders = ["Ascendente", "Descendente"];
const optionGenders = ["Male", "Female", "Genderless", "unknown"];

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const [order, setOrder] = useState("");
  const dispatch = useDispatch();

  const onClose = (id, removeFav, setIsFav) => {
    setIsFav(false);
    dispatch(removeFav(id));
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <div className={styles.select}>
        <select name="order" value={order} onChange={handleOrder}>
          <option value="">Seleccione un orden: </option>
          {optionOrders.map((order) => {
            return <option key={order}>{order}</option>;
          })}
        </select>

        <select name="gender" onChange={handleFilter}>
          <option value="All">All</option>
          {optionGenders.map((gender) => {
            return <option key={gender}>{gender}</option>;
          })}
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
