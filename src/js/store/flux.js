const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },
    actions: {
      addToFavorites: (name) => {
        const store = getStore();
        const updatedFavorites=[...store.favorites, name]
        setStore({ favorites: updatedFavorites });
        
     
      },
      deleteFavorite:(name) => {
        const store = getStore();
        const deleteFavorites = store.favorites.filter(favorite => favorite !== name);
        setStore({ favorites: deleteFavorites });
      },
      // Use getActions to call a function within a function
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadSomeData: () => {
        /**
          fetch().then().then(data => setStore({ "foo": data.bar }))
        */
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
