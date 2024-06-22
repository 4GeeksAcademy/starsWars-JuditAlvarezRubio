// import axios from 'axios'
// const instance =axios.create({baseUrl:'https://swapi.dev/api'});
//     export const getPeople=()=>instance.get(`/people/`)
export const getPeople = () => {
    return fetch('https://swapi.dev/api/people')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data; // Devuelve los datos para usarlos fuera de la función
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        throw error;
      });
  };