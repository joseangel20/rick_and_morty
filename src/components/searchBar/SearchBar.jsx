import { useState, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import styles from "./SearchBar.module.css";

const handleChange = (setId, event) => {
  const value = event.target.value;
  if (isNaN(Number(value))) {
    return;
  }

  setId(value);
};

const clearInput = (input) => {
  input.current.value = "";
};

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const input = useRef();
  const { pathname } = useLocation();

  return (
    <div className={styles.containerSearch}>
      <NavLink to="/home">
        <button className={styles.home}>Home</button>
      </NavLink>
      <Link to="/about">
        <button className={styles.about}>About</button>
      </Link>
      <input
        className={pathname === "/home" ? "" : styles.disable}
        type="search"
        placeholder="id for add..."
        onChange={(event) => handleChange(setId, event)}
        ref={input}
      />
      <button
        className={[
          styles.boton_sobre_input,
          pathname === "/home" ? "" : styles.disable,
        ].join(" ")}
        onClick={() => {
          props.onSearch(id, props.characters, props.setCharacters);
          clearInput(input);
        }}
      >
        Agregar
      </button>

      <button
        className={pathname === "/home" ? "" : styles.disable}
        onClick={() => {
          props.onSearchRandom(props.characters, props.setCharacters);
          clearInput(input);
        }}
      >
        Random
      </button>
    </div>
  );
}
