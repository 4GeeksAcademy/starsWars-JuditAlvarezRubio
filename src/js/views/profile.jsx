import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterById } from "../../api";

const Profile = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    getCharacterById(id).then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Gender: {character.gender}</p>
      <p>Hair color: {character.hair_color}</p>
      <p>Skin: {character.skin_color}</p>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />
    </div>
  );
};
export default Profile;
