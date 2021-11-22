import htmlToElement from '../../utils/htmlToElement';
import GamePageHTML from './gamePage.html';
import Title from '../../components/Title/title';
import { ARTIST, ARTIST_QUESTION, IMAGE_FILE_EXTENSION, MAIN_PAGE_URL, PAINTING_QUESTION } from '../../constants';
import Dots from '../../components/Dots/dots';
import ImageComponent from '../../components/Image/image';
import Options from '../../components/Options/options';
import state from '../../State';

import './gamePage.scss';
import redirectTo from '../../utils/redirectTo';

const GamePage = () => {
  const category = state.getCategory();
  if (!category) {
    redirectTo(MAIN_PAGE_URL);
  }
  const isArtistCategory = category === ARTIST.title;

  const gamePageElement = htmlToElement(GamePageHTML);

  const dots = state.getGameResults();

  const { author, name, year, imageNum, questionOptions, dotNumber } = state.getCurrentQuestionData();

  let question;
  if (isArtistCategory) {
    question = ARTIST_QUESTION;
  } else {
    question = `${PAINTING_QUESTION} ${author}?`;
  }
  const customTitle = Title({ title: question, className: 'game-page-title' });
  gamePageElement.appendChild(customTitle);

  if (isArtistCategory) {
    const mainImage = ImageComponent({
      file: imageNum + IMAGE_FILE_EXTENSION,
      alt: `Картина ${dotNumber}`,
      className: 'game-page-main-image',
    });
    gamePageElement.appendChild(mainImage);
  }

  const optionsElement = Options({
    options: questionOptions,
    isArtistCategory,
    correctArtist: author,
    correctPainting: imageNum,
    infoPaintingName: name,
    infoPaintingYear: year,
    questionNumber: dotNumber,
  });

  gamePageElement.appendChild(optionsElement);

  const dotsElement = Dots({ dots, activeDot: dotNumber });

  gamePageElement.appendChild(dotsElement);

  return gamePageElement;
};

export default GamePage;
