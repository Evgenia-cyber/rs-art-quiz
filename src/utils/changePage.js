const changePage = (newUrl) => {
  window.history.pushState({}, null, newUrl);
  window.history.go();
};

export default changePage;
