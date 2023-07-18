import { useState, useRef } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const span = useRef();

  const handleChange = (event) => {
    span.current.innerText = "";
    if (isNaN(Number(event.target.value))) {
      span.current.innerText = "Debes digitar un valor númerico desde 1 al 826";
      return;
    }

    setId(event.target.value);
  };

  return (
    <div className={styles.containerSearch}>
      <span ref={span}></span>
      <input
        type="search"
        placeholder="id for add..."
        onChange={handleChange}
      />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
      <div></div>
    </div>
  );
}
