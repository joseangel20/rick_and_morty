import SearchBar from '../searchBar/SearchBar';

const Nav = () => {
  return (
    <div>
      <SearchBar
        onSearch={(characterID) => window.alert(characterID.constructor)}
      />
    </div>
  );
};

export default Nav;
