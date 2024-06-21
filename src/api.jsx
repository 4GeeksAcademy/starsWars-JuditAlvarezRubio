
export const getPeople = (page) => instance.get(`/people/?page=${page}`);
export const getCharacterById = (id) => instance.get(`/people/${id}`);
