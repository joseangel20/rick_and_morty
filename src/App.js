import "./App.css";
//import Card from "./components/Card.jsx";
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/searchBar/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <SearchBar
        onSearch={(characterID) => window.alert(characterID.constructor)}
      />

      <Cards characters={characters} />
    </div>
  );
}

export default App;
