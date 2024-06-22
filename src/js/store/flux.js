const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
     
    },
    actions: {







      getCharacters: async () => {
        fetch("https://swapi.dev/api");
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
     
    },
  };
};

export default getState;
