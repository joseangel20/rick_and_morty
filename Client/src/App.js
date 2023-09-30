/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { onSearch, onSearchRandom, onClose } from "./utilities/app.utility";
import { logOutAction, loginRedux} from "./redux/actions";
import { useDispatch } from "react-redux";
import * as component from "./vista/view";
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/rickandmorty";
//axios.defaults.baseURL = "rickandmorty-pi.up.railway.app/rickandmorty";
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

  async function login(userData, dispatch) {
    const { email, password } = userData;
    const URL = "/login/";

    try {
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );

      const { access } = data;
      setAccess(access);
      dispatch(loginRedux(data.token));
      access && navigate("/home");
      !access && alert("Usuario o password incorrecto");
    } catch (response) {
      //console.clear();
      console.log(response.message);
    }
  }

  useEffect(() => {
    !access && navigate("/");
    
  }, [access, navigate]);

  const Nav = (
    <component.Nav
      onSearch={onSearch}
      characters={characters}
      setCharacters={setCharacters}
      onSearchRandom={onSearchRandom}
      onLogOut={logOut}
    />
  );

  const Cards = (
    <component.Cards
      onClose={onClose}
      characters={characters}
      setCharacters={setCharacters}
    />
  );

  return (
    <div className="App">

      {pathname !== "/" && Nav}

      <Routes>
        <Route path="/" element={<component.Form login={login} />} />
        <Route path="/home" element={Cards} />
        <Route path="/about" element={<component.About />} />
        <Route path="/favorites" element={<component.Favorites />} />
        <Route path="/detail/:id" element={<component.Detail />} />
        <Route path="*" element={<component.Error />} />
      </Routes>
    </div>
  );
}

export default App;
