import SearchBar from "../searchBar/SearchBar";
import styles from "./nav.module.css";

const Nav = ({ onSearch, onSearchRandom, characters, setCharacters }) => {
  return (
    <div className={styles.nav}>
      <SearchBar
        onSearchRandom={onSearchRandom}
        onSearch={onSearch}
        characters={characters}
        setCharacters={setCharacters}
      />
    </div>
  );
};

export default Nav;
