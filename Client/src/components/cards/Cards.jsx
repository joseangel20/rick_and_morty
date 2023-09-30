import Card from "../card/Card";
import styles from "./Cards.module.css";

const showCard = (char, props) => {
  return (
    <Card
      key={char.id.toString()}
      id={char.id}
      name={char.name}
      status={char.status}
      species={char.species}
      gender={char.gender}
      origin={char.origin}
      image={char.image}
      onClose={props.onClose}
      characters={props.characters}
      setCharacters={props.setCharacters}
    />
  );
};

export default function Cards(props) {
  return (
    <>
      <div className={styles.select}></div>
      <div className={styles.containerCards}>
        {props.characters.map((char) => {
          return showCard(char, props);
        })}
      </div>
    </>
  );
}
