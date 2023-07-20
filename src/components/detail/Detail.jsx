import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  let origin;

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );

    return setCharacter({});
  }, [id]);

  // React no reconoce objetos anidados
  // aqui recorro esa propiedad
  for (let item in character.origin) {
    if (item === "name") origin = character.origin[item];
  }

  return (
    <div className="container_detail">
      <div className="detail">
        <h1>{character.name}</h1>
        <h3>STATUS | {character.status}</h3>
        <h3>GENDER | {character.gender}</h3>
        <h3>SPECIE | {character.species}</h3>
        <h3>ORIGIN | {origin}</h3>
      </div>
      <div>
        <img src={character.image} alt={character.name} width={350} />
      </div>
    </div>
  );
};

export default Detail;
