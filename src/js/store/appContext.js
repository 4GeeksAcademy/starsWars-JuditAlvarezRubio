import React, { useState, useContext, createContext } from "react";
import getState from "./flux.js";

// export const AppContext = createContext();

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useAppContext debe usarse dentro de un AppProvider');
//   }
//   return context;
// };

// export const AppProvider = ({ children }) => {
//   const [favoritesCharacters, setFavoritesCharacters] = useState([]);
//   const [favoritesPlanets, setFavoritesPlanets] = useState([]);
//   const [favoritesVehicles, setFavoritesVehicles] = useState([]);

//   return (
//     <AppContext.Provider
//       value={{
//         favoritesCharacters,
//         setFavoritesCharacters,
//         favoritesPlanets,
//         setFavoritesPlanets,
//         favoritesVehicles,
//         setFavoritesVehicles,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

export const getPeople = () => {
  return fetch("https://swapi.dev/api/people")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching characters:", error);
      throw error;
    });
};

export const getVehicles = () => {
  return fetch("https://swapi.dev/api/vehicles/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching vehicles:", error);
      throw error;
    });
};

export const getPlanets = () => {
  return fetch("https://swapi.dev/api/planets/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching planets:", error);
      throw error;
    });
};

export const getCharacterById = (id) => {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching character by ID:", error);
      throw error;
    });
};
export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
