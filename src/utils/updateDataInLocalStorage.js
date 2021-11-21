import { ARTIST, CHANK, PAINTING } from '../constants';
import getDataFromLocalStorage from './getDataFromLocalStorage';
import setDataToLocalStorage from './setDataToLocalStorage';

const updateDataInLocalStorage = (isArtistCategory, correctPainting, lastQuestion, results) => {
  const category = isArtistCategory ? ARTIST.title : PAINTING.title;

  const roundNumber = (correctPainting - lastQuestion) / CHANK + 1;

  const round = `round ${roundNumber}`;

  const dataFromLocalStorage = getDataFromLocalStorage(category);
  dataFromLocalStorage[round].results = results;

  setDataToLocalStorage(category, dataFromLocalStorage);
};

export default updateDataInLocalStorage;
