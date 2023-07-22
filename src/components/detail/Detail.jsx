import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

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

  const description = [
    <div className="detail">
      <h1>{character.name}</h1>
      <h3>STATUS | {character.status}</h3>
      <h3>GENDER | {character.gender}</h3>
      <h3>SPECIE | {character.species}</h3>
      <h3>ORIGIN | {character.origin?.name}</h3>
    </div>,
    <div>
      <img src={character.image} alt={character.name} width={350} />
    </div>,
  ];

  return (
    <div className="container_detail">
      {character ? description : <h1>Loading</h1>}
    </div>
  );
};

export default Detail;
