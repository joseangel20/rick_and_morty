import { useState, useRef, useEffect } from "react";
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
  const disable = pathname === "/home" ? "" : styles.disable;

  useEffect(() => {
    if (pathname === "/home") {
      input.current.focus();
    }
  }, [pathname]);

  return (
    <div className={styles.containerSearch}>
      <NavLink to="/home">
        <button className={styles.home}>Home</button>
      </NavLink>
      <Link to="/about">
        <button className={styles.about}>About</button>
      </Link>

      <Link to="/favorites">
        <button className="">Favorites</button>
      </Link>
      <input
        className={disable}
        type="search"
        placeholder="id for add..."
        onChange={(event) => handleChange(setId, event)}
        ref={input}
      />
      <button
        className={[styles.boton_sobre_input, disable].join(" ")}
        onClick={() => {
          props.onSearch(id, props.characters, props.setCharacters);
          clearInput(input);
        }}
      >
        Agregar
      </button>

      <button
        className={disable}
        onClick={() => {
          props.onSearchRandom(props.characters, props.setCharacters);
          clearInput(input);
        }}
      >
        Random
      </button>
      <button onClick={props.onLogOut}>Log out</button>
    </div>
  );
}
