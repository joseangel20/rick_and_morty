import axios from "axios";

const IsMountComponent = (idInput, characters) => {
  let isMount = false;
  characters.forEach((character) => {
    if (+character.id === Number(idInput)) isMount = true;
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

const axio = async (setCharacters, id) => {
  try {
    const { data } = await axios(
      `/character/${id}`
    );

    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    }
    
  } catch ({response}) {
    let protocolo = 404;
    if (response.status === protocolo || response.status === 500) {
      console.clear();
      window.alert("¡No hay personajes con este ID!");
    }
  }
};

export const onClose = (id, characters, setCharacters) => {
  // eslint-disable-next-line array-callback-return
  const AuxCharacters = characters.filter((character) => {
    if (character.id !== id) {
      return character;
    }
  });

  setCharacters(AuxCharacters);
};
