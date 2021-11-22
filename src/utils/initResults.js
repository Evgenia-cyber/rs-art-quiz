import { CHANK, NOT_ANSWER } from '../constants';

const initResults = () => {
  const array = [];

  for (let i = 0; i < CHANK; i += 1) {
    array.push(NOT_ANSWER);
  }

  return array;
};

export default initResults;
