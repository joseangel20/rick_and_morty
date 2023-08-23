import axios from "axios";

const IsMountComponent = (idInput, characters) => {
  let isMount = false;
  characters.forEach((character) => {
    if (character.id === Number(idInput)) isMount = true;
  });

  return isMount;
};

export const onSearch = (idInput, characters, setCharacters) => {
  if (IsMountComponent(idInput, characters)) return;
  axio(setCharacters, idInput);
};

export const onSearchRandom = (characters, setCharacters) => {
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

export const onClose = (id, characters, setCharacters) => {
  // eslint-disable-next-line array-callback-return
  const AuxCharacters = characters.filter((character) => {
    if (character.id !== Number(id)) {
      return character;
    }
  });

  setCharacters(AuxCharacters);
};

export const login = (userData, setAccess, navigate) => {
  const EMAIL = "jose20@gmail.es";
  const PASSWORD = "pass12";
  if (userData.email === EMAIL && userData.password === PASSWORD) {
    setAccess(true);
    navigate("/home");
    return;
  }

  setAccess(false);
};
