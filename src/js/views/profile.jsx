import { useEffect, useState } from "react";
import { useParams } from "react-router";


const Profile = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await getCharacterById(id);
        setCharacter(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching character:', error);
      }
    };
    fetchCharacter();
  }, [id]); 

  return (
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
  );
};

export default Profile;
