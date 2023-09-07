/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./detail.css";
import loading from "../../assets/img/loading.gif";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        }
      })
      .catch(({ response }) => {
        if (response?.status === 404 && response.status === 410)
          handleNavigate();
      });

    return () => setCharacter({});
  }, [id]);

  const description = [
    <div key={"0"} className="detail">
      <h1>{character.name}</h1>
       <h3>STATUS | {character.status}</h3>
      <h3>GENDER | {character.gender}</h3>
      <h3>SPECIE | {character.species}</h3>
      <h3>ORIGIN | {character.origin}</h3>
    </div>,
    <div key={"1"} className="contentImage">
      <img src={character.image} alt={character.name} width={350} />
    </div>,
  ];

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/Error");
  };

  return (
    <div className="container_detail">
      {character.name ? (
        description
      ) : (
        <div className="loading">
          <img src={loading} alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Detail;
