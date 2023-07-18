import SearchBar from "../searchBar/SearchBar";

const Nav = (props) => {
  return (
    <div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
