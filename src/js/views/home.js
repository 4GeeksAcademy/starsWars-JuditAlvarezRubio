import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { getPeople, getVehicles, getPlanets } from "./api";
import { getIdFromUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Home = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await getPeople();
        setPeople(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };
    fetchPeople();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        setVehicles(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };
    fetchVehicles();
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const data = await getPlanets();
        setPlanets(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };
    fetchPlanets();
  }, []);

  return (
    <>
      <div>
        {people.map((person, i) => (
          <Link to={`/profile/${getIdFromUrl(person.url)}`} key={i}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(person.url)}.jpg`}
              alt={person.name}
            />
            <p>{person.name}</p>
          </Link>
        ))}
      </div>

      <div>
        {vehicles.map((vehicle, i) => (
          <Link to={`/vehicles/${getIdFromUrl(vehicle.url)}`} key={i}>
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${getIdFromUrl(vehicle.url)}.jpg`}
              alt={vehicle.name}
            />
            <p>{vehicle.name}</p>
          </Link>
        ))}
      </div>

      <div>
        {planets.map((planet, i) => (
          <Link to={`/planets/${getIdFromUrl(planet.url)}`} key={i}>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${getIdFromUrl(planet.url)}.jpg`}
              alt={planet.name}
            />
            <p>{planet.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
};
