import React, { useContext, useState, useEffect } from "react";
import "../../styles/home.css";
import { Context, } from "../store/appContext"
import { getIdFromUrl } from "../../utils";
import { Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

export const Home = () => {
  const { actions, store } = useContext(Context)

  useEffect(() => {
    actions.fetchPeople();
    actions.fetchVehicles();
    actions.fetchPlanets();
  }, []);

 return (
    <>
      <div className="container" style={{ paddingTop: "60px" }}>
     
        <div className="text-center mb-4">
          <h2 className="display-4 text-title">Characters</h2>
        </div>

        <div className="d-flex overflow-auto mb-5 py-4 custom-scroll" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
          {store.people.map((person, i) => (
            <Card className="large-card mx-3 shadow-star" key={i}>
              <Card.Img
                src={`https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(person.url)}.jpg`}
                alt={person.name}
                className="img-fluid large-card-img"
              />
              <Card.Body>
                <Card.Title className="text-title">{person.name}</Card.Title>
                <Link to={`/profile/${getIdFromUrl(person.url)}`} className="btn btn-learn-more p-0 d-block mb-2">Learn more!</Link>
                <Button variant="danger" className="mt-2 d-block" onClick={() => actions.addToFavorites(person.name)}>
                  Add to Favorites
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="my-5">
          <div className="text-center mb-4">
            <h2 className="display-4 text-title">Vehicles</h2>
          </div>
          <div className="d-flex overflow-auto mb-5 py-4 custom-scroll" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
            {store.vehicles.map((vehicle, i) => (
              <Card className="large-card mx-3 shadow-star" key={i}>
                <Card.Img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${getIdFromUrl(vehicle.url)}.jpg`}
                  alt={vehicle.name}
                  className="img-fluid large-card-img"
                />
                <Card.Body>
                  <Card.Title className="text-title">{vehicle.name}</Card.Title>
                  <Link to={`/vehicles/${getIdFromUrl(vehicle.url)}`} className="btn btn-learn-more p-0 d-block mb-2">Learn more!</Link>
                  <Button variant="danger" className="mt-2 d-block" onClick={() => actions.addToFavorites(vehicle.name)}>
                    Add to Favorites
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>

        <div className="my-5">
          <div className="text-center mb-4">
            <h2 className="display-4 text-title">Planets</h2>
          </div>
          <div className="d-flex overflow-auto mb-5 py-4 custom-scroll" style={{ maxWidth: "100%", whiteSpace: "nowrap" }}>
            {store.planets.map((planet, i) => (
              <Card className="large-card mx-3 shadow-star" key={i}>
                <Card.Img
                  src={`https://starwars-visualguide.com/assets/img/planets/${getIdFromUrl(planet.url)}.jpg`}
                  alt={planet.name}
                  className="img-fluid large-card-img"
                />
                <Card.Body>
                  <Card.Title className="text-title">{planet.name}</Card.Title>
                  <Link to={`/planets/${getIdFromUrl(planet.url)}`} className="btn btn-learn-more p-0 d-block mb-2">Learn more!</Link>
                  <Button variant="danger" className="mt-2 d-block" onClick={() => actions.addToFavorites(planet.name)}>
                    Add to Favorites
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
);
};
