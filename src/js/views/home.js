import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { getPeople } from "../../api";
import { getIdFromUrl } from "../../utils";

export const Home = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [elementsAmount, setElementsAmount] = useState();

  useEffect(() => {
    getPeople(page).then((res) => {
      setElementsAmount(res.data.count);
      setPeople(res.data.results);
    });
  }, [page]);

  return (
    <div>
      {people.map((person, i) => (
        <Link to={"/profile/" + getIdFromUrl(person.url)} key={i}>
          <img
            src={`https://starswars-visualguide.com/assets/img/characters/${getIdFromUrl(
              person.url
            )}.jpg`}
          />
          <p>{person.name}</p>
        </Link>
      ))}
      {/* esto es para crear la paginacon de la pagina web */}
      {getPaginationLinks(elementsAmount, 10).map((n, i) => (
        <Link key={n} to={`/${n}`}>
          {n + 1}
        </Link>
      ))}
    </div>
  );
};
