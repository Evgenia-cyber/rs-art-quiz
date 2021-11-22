import createQuestionOptionsWithFirstCorrectAnswer from './createQuestionOptionsWithFirstCorrectAnswer';
import shuffleArray from './shuffleArray';

const createQuestionOptions = (allData, currentQuestionData, category) => {
  const options = createQuestionOptionsWithFirstCorrectAnswer(allData, currentQuestionData, category);

  shuffleArray(options);

  return options;
};

export default createQuestionOptions;
