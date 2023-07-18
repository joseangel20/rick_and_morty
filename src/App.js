/* eslint-disable array-callback-return */
import { useState } from "react";
import axios from "axios";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    let isMount = false;
    characters.forEach((character) => {
      if (character.id === Number(id)) isMount = true;
    });

    if(isMount) return;
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    const AuxCharacters = characters.filter((character) => {
      if (character.id !== Number(id)) return character;
    });

    setCharacters(AuxCharacters);
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
