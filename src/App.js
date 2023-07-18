import { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import characters from "./data.js";
import Nav from "./components/Nav/Nav";
function App() {
  const [personajes] = useState(characters);

  return (
    <div className="App">
      <Nav />
      <Cards personajes={personajes} />
    </div>
  );
}

export default App;
