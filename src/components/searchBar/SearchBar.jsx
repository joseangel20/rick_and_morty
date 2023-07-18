import { useState, useRef } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const span = useRef();
  const input = useRef();

  const handleChange = (event) => {
    span.current.innerText = "";
    if (isNaN(Number(event.target.value))) {
      span.current.innerText = "Debes digitar un valor númerico desde 1 al 826";
      return;
    }

    setId(event.target.value);
  };

  const clearInput = () => {
    input.current.value = "";
  };

  return (
    <div className={styles.containerSearch}>
      <span ref={span}></span>
      <input
        type="search"
        placeholder="id for add..."
        onChange={handleChange}
        ref={input}
      />
      <button
        onClick={() => {
          props.onSearch(id);
          clearInput();
        }}
      >
        Agregar
      </button>
    </div>
  );
}
