import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={styles.containerSearch}>
      <input type="search" placeholder="id for add..."/>
      <button onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
