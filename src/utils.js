export const getIdFromUrl = (url) => {
  const url_splited = url.split("/");
  const arraySeparated = url_splited.length;
  console.log( url_splited[arraySeparated - 2])
  return url_splited[arraySeparated - 2];
};
export const getPaginationLinks = (elementsAmount, elementsPerPage) => {
  const pageAmount = elementsAmount / elementsPerPage;
  const linksData = [];
  for (let i = 0; i < pageAmount; i++) {
    linksData.push(i);
  }
  return linksData;
};
