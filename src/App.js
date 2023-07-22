/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/nav.jsx";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import "./App.css";

const onSearch = (id, characters, setCharacters) => {
  let isMount = false;
  characters.forEach((character) => {
    if (character.id === Number(id)) isMount = true;
  });

  if (isMount) return;
  axio(setCharacters, id);
};

const onSearchRandom = (characters, setCharacters) => {
  let isMount = false;
  const id = Math.ceil(Math.random() * 826);
  characters.forEach((character) => {
    if (character.id === Number(id)) isMount = true;
  });

  if (isMount) return;
  axio(setCharacters, id);
};

const axio = (setCharacters, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    } else {
      window.alert("¡No hay personajes con este ID!");
    }
  });
};

const onClose = (id, characters, setCharacters) => {
  const AuxCharacters = characters.filter((character) => {
    if (character.id !== Number(id)) return character;
  });

  setCharacters(AuxCharacters);
};

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // axio(setCharacters, 1);
  }, []);

  return (
    <div className="App">
      <Nav
        onSearch={onSearch}
        characters={characters}
        setCharacters={setCharacters}
        onSearchRandom={onSearchRandom}
      />
      <Routes>
        <Route
          path="/home"
          element={
            <Cards
              onClose={onClose}
              characters={characters}
              setCharacters={setCharacters}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
