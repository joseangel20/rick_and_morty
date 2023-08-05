/* eslint-disable array-callback-return */
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import * as comp from "./vista/view";
import { onSearch, onSearchRandom, onClose } from "./utilities/app.utility";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();

  const cards = (
    <comp.Cards
      onClose={onClose}
      characters={characters}
      setCharacters={setCharacters}
    />
  );

  const nav = (
    <comp.Nav
      onSearch={onSearch}
      characters={characters}
      setCharacters={setCharacters}
      onSearchRandom={onSearchRandom}
    />
  );

  return (
    <div className="App">
      {pathname !== "/" && nav}

      <Routes>
        <Route path="/" element={<comp.Form />} />
        <Route path="/home" element={cards} />
        <Route path="/about" element={<comp.About />} />
        <Route path="/detail/:id" element={<comp.Detail />} />
        <Route path="*" element={<comp.Error />} />
      </Routes>
    </div>
  );
}

export default App;
