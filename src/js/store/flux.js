const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
      people: [],
      vehicles: [],
      planets: [],
    },


    actions: {

      addToFavorites: (name) => {
        const store = getStore();
        const updatedFavorites = [...store.favorites, name];
        setStore({ favorites: updatedFavorites });
      },


      deleteFavorite: (name) => {
        const store = getStore();
        const deleteFavorites = store.favorites.filter(
          (favorite) => favorite !== name
        );
        setStore({ favorites: deleteFavorites });
      },


      fetchPeople: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people/");
          const data = await response.json();
          setStore({ people: data.results });
        } catch (error) {
          console.error("Error fetching people:", error);
        }
      },

      
      fetchVehicles: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/vehicles/");
          const data = await response.json();
          setStore({ vehicles: data.results });
        } catch (error) {
          console.error("Error fetching vehicles:", error);
        }
      },

      
      fetchPlanets: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/planets/");
          const data = await response.json();
          setStore({ planets: data.results });
        } catch (error) {
          console.error("Error fetching planets:", error);
        }
      },

      
      getCharacterById: async (id) => {
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
      },
      
      
      loadSomeData: () => {

      },

      
      changeColor: (index, color) => {
        const store = getStore();
        const updatedCharacters = store.characters.map((char, i) => {
          if (i === index) char.color = color;
          return char;
        });
        setStore({ characters: updatedCharacters });
      },
    },
  };
};

export default getState;
