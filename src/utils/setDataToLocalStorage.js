const setDataToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export default setDataToLocalStorage;
