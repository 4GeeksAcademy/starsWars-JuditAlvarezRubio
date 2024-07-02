import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterById } from "../store/appContext";


const Profile = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await getCharacterById(id);
        setCharacter(res);
        console.log(res);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };
    console.log(id)
    console.log(character)
    fetchCharacter();
  }, [id]); 

  return (
    <>
   
    {character?

    <div>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Gender: {character.gender}</p>
      <p>Hair color: {character.hair_color}</p>
      <p>Skin: {character.skin_color}</p>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={character.name}
      />
    </div>
    :
    <div>loading</div>}
    
    </>
  );
};

export default Profile;
