import styles from "./card.module.css";

export default function Card({
  onClose,
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onAbout,
}) {
  return (
    <div className={styles.containerCard}>
      <button onClick={()=>onClose(id)}>X</button>
      <p className={styles.name}>{name.split(" ")[0]}</p>
      <p className={[styles.gender, styles.show].join(" ")}>{gender}</p>
      <p className={styles.show}>{status}</p>
      <p className={styles.show}>{species}</p>
      <p className={styles.show}>{origin}</p>
      <img src={image} alt="d" />
      <div className={styles.about_card} onClick={onAbout}>
        <p>About me</p>
      </div>
    </div>
  );
}
