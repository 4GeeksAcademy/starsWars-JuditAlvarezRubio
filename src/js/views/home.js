import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { getPeople, getVehicles, getPlanets, Context, } from "../store/appContext"
import { getIdFromUrl } from "../../utils";
import { Link } from "react-router-dom";
import {  Card, Button } from 'react-bootstrap';



export const Home = () => {
  const [people, setPeople] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);
  // const [favoritesCharacters, setFavoritesCharacters] = useState([]);
  // const [favoritesPlanets, setFavoritesPlanets] = useState([]);
  // const [favoritesVehicles, setFavoritesVehicles] = useState([]);
  const {actions, store}=useContext(Context)
  console.log(store.favorites)


  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const data = await getPeople();
        setPeople(data.results);
      } catch (error) {
        console.error('Error fetching people:', error);
      }
    };

    const fetchVehicles = async () => {
      try {
        const data = await getVehicles();
        setVehicles(data.results);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    const fetchPlanets = async () => {
      try {
        const data = await getPlanets();
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPeople();
    fetchVehicles();
    fetchPlanets();
  }, []);
  console.log(planets)

//  const addToFavoritesCharacters = (person) => {
//     if (!favoritesCharacters.includes(person)) {
//       setFavoritesCharacters ([...favoritesCharacters, person])
//     }
//   }


//   const addToFavoritesPlanets = (planet) => {
//     if (!favoritesPlanets.includes(planet)) {
//       setFavoritesPlanets ([...favoritesPlanets, planet])
//     }
//   }



//   const addToFavoritesVehicles = (vehicle) => {
//     if (!favoritesVehicles.includes(vehicle)) {
//       setFavoritesVehicles ([...favoritesVehicles, vehicle])
//     }
//   }

  return (
    <>
  <div style={{ paddingTop: "60px" }}>
  <div className="text-center mb-4">
    <h2 className="display-4">Characters</h2>
  </div>

  <div className="d-flex overflow-auto mb-5 py-4 custom-scroll" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
    {people.map((person, i) => (
      <Card className="large-card mx-2 shadow" key={i}>
        <Card.Img
          src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(person.url)}.jpg`}
          alt={person.name}
          className="img-fluid large-card-img"
        />
        <Card.Body>
          <Card.Title>{person.name}</Card.Title>
          <Link to={`/profile/${getIdFromUrl(person.url)}`} className="btn btn-link p-0 d-block">Learn more!</Link>
          <Button variant="primary" className="mt-2 d-block" onClick={() => actions.addToFavorites(person.name)}>
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
</div>

    <div>
  <div className="text-center mb-4">
    <h2 className="display-4">Vehicles</h2>
  </div>
  <div className="d-flex overflow-auto mb-5 py-4 custom-scroll" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
    {vehicles.map((vehicle, i) => (
      <Card className="large-card mx-2 shadow" key={i}>
        <Card.Img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${getIdFromUrl(vehicle.url)}.jpg`}
          alt={vehicle.name}
          className="img-fluid large-card-img"
        />
        <Card.Body>
          <Card.Title>{vehicle.name}</Card.Title>
          <Link to={`/vehicles/${getIdFromUrl(vehicle.url)}`} className="btn btn-link p-0 d-block">Learn more!</Link>
          <Button variant="primary" className="mt-2 d-block" onClick={() => actions.addToFavorites(vehicle.name)}>
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
</div>

<div>
  <div className="text-center mb-4">
    <h2 className="display-4">Planets</h2>
  </div>
  <div className="d-flex overflow-auto mb-5 py-4 custom-scroll" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
    {planets.map((planet, i) => (
      <Card className="large-card mx-2 shadow" key={i}>
        <Card.Img
          src={`https://starwars-visualguide.com/assets/img/planets/${getIdFromUrl(planet.url)}.jpg`}
          alt={planet.name}
          className="img-fluid large-card-img"
        />
        <Card.Body>
          <Card.Title>{planet.name}</Card.Title>
          <Link to={`/planets/${getIdFromUrl(planet.url)}`} className="btn btn-link p-0 d-block">Learn more!</Link>
          <Button variant="primary" className="mt-2 d-block" onClick={() => actions.addToFavorites(planet.name)}>
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
</div>
            
             
    </>
  );
};
