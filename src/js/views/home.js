import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { getPeople } from "./api";
import { getIdFromUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Home = () => {
  // const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [elementsAmount, setElementsAmount] = useState();

  useEffect(() => { const fetchPeople = async () =>
     { try { const data = await getPeople(); 
      setPeople(data.results);
       console.log(data.results); } catch (error) { console.error('Error fetching people:', error); 

       } }; fetchPeople(); 
      }, []);
  return (
    <div>
      {people.map((person, i) => (
        <Link to={`/profile/${i}` + getIdFromUrl(person.url)} key={i}>
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${i}.jpg `}
          />
          <p>{person.name}</p>
          <p>{person.height}</p>
          <p>{person.skin_color}</p>
        </Link>
      ))}
      {/* esto es para crear la paginacon de la pagina web
      {getPaginationLinks(elementsAmount, 10).map((n, i) => (
        <Link key={n} to={`/${n}`}>
          {n + 1}
        </Link>
      ))} */}
    </div>
  );
};


