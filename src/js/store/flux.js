const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
    },
    actions: {
      getCharacters: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people/");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setStore({ characters: data.results });
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
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
