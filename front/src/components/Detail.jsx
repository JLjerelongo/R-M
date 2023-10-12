import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-jljerelongo`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className="detail-container">
      <h2>Name: {character?.name}</h2>
      <h2>Status: {character?.status}</h2>
      <h2>Species: {character?.species}</h2>
      <h2>Gender: {character?.gender}</h2>
      <h2>Origin: {character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} className="character-image" />
    </div>
  );
}