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
        return data;
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        throw error;
      });
  };
  export const getVehicles = () => {
    return fetch('https://swapi.dev/api/vehicles/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data; 
    })
    .catch(error => {
      console.error('Error fetching vehicles:', error);
      throw error;
    });
  };


  export const getPlanets = (id) => {
    return fetch('https://swapi.dev/api/planets/')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      return data; 
    })
    .catch(error => {
      console.error('Error fetching planets:', error);
      throw error;
    });
  }
export const getCharacterById = (id) => {
  return fetch(`https://swapi.dev/api/people/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    return data; 
  })
  .catch(error => {
    console.error('Error fetching planets:', error);
    throw error;
  });
}