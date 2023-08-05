/* eslint-disable array-callback-return */
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/cards/Cards.jsx";
import axios from "axios";
import Nav from "./components/nav/nav.jsx";
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Error from "./components/error/Error";
import "./App.css";

const IsMountComponent = (idInput, characters) => {
  let isMount = false;
  characters.forEach((character) => {
    if (character.id === Number(idInput)) isMount = true;
  });

  return isMount;
};

const onSearch = (idInput, characters, setCharacters) => {
  if (IsMountComponent(idInput, characters)) return;
  axio(setCharacters, idInput);
};

const onSearchRandom = (characters, setCharacters) => {
  const id = Math.ceil(Math.random() * 826);

  if (IsMountComponent(id, characters)) return;
  axio(setCharacters, id);
};

const axio = (setCharacters, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    })
    .catch(({ response }) => {});
};

const onClose = (id, characters, setCharacters) => {
  const AuxCharacters = characters.filter((character) => {
    if (character.id !== Number(id)) return character;
  });

  setCharacters(AuxCharacters);
};

function App() {
  const [characters, setCharacters] = useState([]);
  // useEffect(() => {
  //   // axio(setCharacters, 1);
  // }, []);

  const cards = (
    <Cards
      onClose={onClose}
      characters={characters}
      setCharacters={setCharacters}
    />
  );
  return (
    <div className="App">
      <Nav
        onSearch={onSearch}
        characters={characters}
        setCharacters={setCharacters}
        onSearchRandom={onSearchRandom}
      />
      <Routes>
        <Route path="/" element={cards} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
