import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { getPeople, getVehicles, getPlanets } from "./api";
import { getIdFromUrl } from "../../utils";
import { Link } from "react-router-dom";
import { Carousel, Card } from 'react-bootstrap';


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
  <Carousel>
      {people.map((person, i) => (
        <Carousel.Item key={i}>
          <Card className="small-card">
            <Card.Img
              src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(person.url)}.jpg`}
              alt={person.name}
              className="img-fluid small-card-img"
            />
            <Card.Body>
              <Card.Title>{person.name}</Card.Title>
              <Link to={`/profile/${getIdFromUrl(person.url)}`}>Ver perfil</Link>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>

 


 


     
   
    <Carousel>
      {vehicles.map((vehicle, i) => (
        <Carousel.Item key={i}>
          <Link to={`/vehicles/${getIdFromUrl(vehicle.url)}`}>
            <img
              className="d-block w-100"
              src={`https://starwars-visualguide.com/assets/img/vehicles/${getVehicles(vehicle.url)}.jpg`}
              alt={vehicle.name}
            />
            <Carousel.Caption>
              <p>{vehicle.name}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>

     

    <Carousel>
      {planets.map((planet, i) => (
        <Carousel.Item key={i}>
          <Link to={`/planets/${getPlanets(planet.url)}`}>
            <img
              className="d-block w-100"
              src={`https://starwars-visualguide.com/assets/img/planets/${getPlanets(planet.url)}.jpg`}
              alt={planet.name}
            />
            <Carousel.Caption>
              <p>{planet.name}</p>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
};
