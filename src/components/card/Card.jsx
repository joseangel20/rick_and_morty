import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.containerCard}>
      <button onClick={props.onClose}>X</button>
      <p className={styles.name}>{props.name.split(" ")[0]}</p>
      <p className={[styles.gender, styles.show].join(" ")}>{props.gender}</p>
      <p className={styles.show}>{props.status}</p>
      <p className={styles.show}>{props.species}</p>
      <p className={styles.show}>{props.origin}</p>
      <img src={props.image} alt="d" />
      <div className={  styles.about_card} onClick={props.onAbout}>
        <p>About me</p>
      </div>
    </div>
  );
}
