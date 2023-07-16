import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={styles.containerCards}>
      {props.characters.map((char) => {
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
            onClose={() => window.alert("Emulamos que se cierra la card")}
            onAbout={() =>
              alert(
                `${char.name}\n${
                  char.origin.name !== "unknown" ? char.origin.name : ""
                }`
              )
            }
          />
        );
      })}
    </div>
  );
}
