import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const showCard = (char) => {
    return (
      <Card
        key={char.id.toString()}
        id={char.id}
        name={char.name}
        status={char.status}
        species={char.species}
        gender={char.gender}
        origin={char.origin.name}
        image={char.image}
        onClose={props.onClose}
        onAbout={() =>
          alert(
            `${char.name}\n${
              char.origin.name !== "unknown" ? char.origin.name : ""
            }`
          )
        }
      />
    );
  };

  return (
    <div className={styles.containerCards}>
      {props.characters.map((char) => {
        return showCard(char);
      })}
    </div>
  );
}
