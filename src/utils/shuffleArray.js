// https://learn.javascript.ru/task/shuffle

const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};

export default shuffleArray;
