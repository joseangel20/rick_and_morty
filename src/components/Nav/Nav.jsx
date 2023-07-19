import SearchBar from "../searchBar/SearchBar";

import styles from "./nav.module.css";

const Nav = (props) => {
  return (
    <div className={styles.nav}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
