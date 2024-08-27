import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { actions, store } = useContext(Context);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3 fixed-top">
    <Link to="/" className="navbar-brand">
      <img
        src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG29.png"
        className="img-fluid"
        style={{ width: "100px" }}
        alt="Star Wars Logo"
      />
    </Link>
    <div className="ml-auto">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-warning dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {store.favorites.length > 0 &&
            store.favorites.map((favorite, index) => (
              <Dropdown.Item key={`favorite-${index}`} className="dropdown-item">
                <span className="text-favorite">{favorite}</span>
                <button
                  type="button"
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => actions.deleteFavorite(favorite)}
                >
                  X
                </button>
              </Dropdown.Item>
            ))}
        </ul>
      </div>
    </div>
    </nav>
  );
};
