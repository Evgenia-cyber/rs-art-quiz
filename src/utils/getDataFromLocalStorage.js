const getDataFromLocalStorage = (name) => {
  if (localStorage.getItem(name)) {
    return JSON.parse(localStorage.getItem(name));
  }
  return null;
};

export default getDataFromLocalStorage;
