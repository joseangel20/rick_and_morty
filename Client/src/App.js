/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { onSearch, onSearchRandom, onClose } from "./utilities/app.utility";
import { logOutAction } from "./redux/actions";
import { useDispatch } from "react-redux";
import * as component from "./vista/view";
import "./App.css";
import axios from "axios";
function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const logOut = () => {
    setAccess(false);
    navigate("/");
    setCharacters([]);
    dispatch(logOutAction());
  };

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');

       !access && alert("Usuario o password incorrecto")
    });
 }
  
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const nav = (
    <component.Nav
      onSearch={onSearch}
      characters={characters}
      setCharacters={setCharacters}
      onSearchRandom={onSearchRandom}
      onLogOut={logOut}
    />
  );

  const cards = (
    <component.Cards
      onClose={onClose}
      characters={characters}
      setCharacters={setCharacters}
    />
  );

  return (
    <div className="App">
      {pathname !== "/" && nav}

      <Routes>
        <Route path="/" element={<component.Form login={login} />} />
        <Route path="/home" element={cards} />
        <Route path="/about" element={<component.About />} />
        <Route path="/favorites" element={<component.Favorites />} />
        <Route path="/detail/:id" element={<component.Detail />} />
        <Route path="*" element={<component.Error />} />
      </Routes>
    </div>
  );
}

export default App;
