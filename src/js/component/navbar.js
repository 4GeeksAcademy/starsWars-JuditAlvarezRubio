
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { Context} from "../store/appContext";

export const Navbar = () => {
  const {actions, store}=useContext(Context)
  // const { favoritesCharacters, favoritesPlanets, favoritesVehicles } = useAppContext();
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="col-md-6 navbar-brand mb-0 h1">
          <img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png" className="img-fluid" style={{ width: '100px' }} alt="Star Wars Logo" />
        </span>
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button 
            type="button" 
            className="btn btn-primary dropdown-toggle" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu">
            {store.favorites.length > 0 && store.favorites.map((favorite, index) => (
              <Dropdown.Item key={`favorite-${index}`}>{favorite}</Dropdown.Item>
            ))}
            {/* {favoritesPlanets.length > 0 && favoritesPlanets.map((planet, index) => (
              <Dropdown.Item key={`planet-${index}`}>{planet.name}</Dropdown.Item>
            ))}
            {favoritesVehicles.length > 0 && favoritesVehicles.map((vehicle, index) => (
              <Dropdown.Item key={`vehicle-${index}`}>{vehicle.name}</Dropdown.Item>
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
