import { ARTIST, COUNT_OF_OPTIONS } from '../constants';

const getRandom = (number) => Math.floor(Math.random() * number);

const createQuestionOptionsWithFirstCorrectAnswer = (allData, currentQuestionData, category) => {
  const isArtistCategory = category === ARTIST.title;

  const { author: currentArtist, imageNum: currentPainting } = currentQuestionData;

  const options = isArtistCategory ? [currentArtist] : [currentPainting];

  while (options.length !== COUNT_OF_OPTIONS) {
    let randomIndex;

    do {
      randomIndex = getRandom(allData.length);
    } while (allData[randomIndex].author === currentArtist || allData[randomIndex].imageNum === currentPainting);

    if (isArtistCategory) {
      options.push(allData[randomIndex].author);
    } else {
      options.push(allData[randomIndex].imageNum);
    }
  }

  return options;
};

export default createQuestionOptionsWithFirstCorrectAnswer;
