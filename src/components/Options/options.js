import htmlToElement from '../../utils/htmlToElement';
import OptionsHTML from './options.html';
import ImageComponent from '../Image/image';
import Button from '../Button/button';
import {
  CHANK,
  CORRECT_ANSWER,
  GAME_PAGE_URL,
  IMAGE_FILE_EXTENSION,
  MAX_PERCENT,
  ROUNDS_PAGE_URL,
  UNCORRECT_ANSWER,
} from '../../constants';
import InfoPopup from '../InfoPopup/infoPopup';
import GameEndPopup from '../GameEndPopup/gameEndPopup';
import state from '../../State';
import changePage from '../../utils/changePage';
import updateDataInLocalStorage from '../../utils/updateDataInLocalStorage';
import correctSound from '../../assets/sounds/correct.mp3';
import wrongSound from '../../assets/sounds/incorrect.mp3';
import sound from '../../utils/sound';

import './options.scss';

const onPopupGameEndBtnClickHandler = () => {
  changePage(ROUNDS_PAGE_URL);
};

const Options = ({
  options,
  isArtistCategory,
  correctArtist,
  correctPainting,
  infoPaintingName,
  infoPaintingYear,
  questionNumber,
}) => {
  const onPopupInfoBtnClickHandler = () => {
    const lastQuestion = CHANK - 1;
    const isLastQuestion = questionNumber === lastQuestion;
    if (!isLastQuestion) {
      state.increaseCurrentQuestionNumber();
      changePage(GAME_PAGE_URL);
    } else {
      const results = state.getGameResults();
      const correctAnswersCount = results.filter((item) => item === CORRECT_ANSWER).length;

      const popupEndGameEl = document.querySelector('.popup-endgame-id');
      const popupResultEl = document.createElement('p');
      popupResultEl.innerHTML = `${correctAnswersCount} / ${CHANK}`;
      popupEndGameEl.querySelector('.result-id').appendChild(popupResultEl);

      popupEndGameEl.classList.remove('hide');

      updateDataInLocalStorage(isArtistCategory, correctPainting, lastQuestion, results);

      state.initGame();
    }
  };

  const onOptionClickHandler = (option, index) => {
    const { volume } = state.getSettings();

    const isCorrectAnswer = option === correctArtist || option === correctPainting;

    const soundSrc = isCorrectAnswer ? correctSound : wrongSound;
    sound.playSound(soundSrc, volume / MAX_PERCENT);

    const result = isCorrectAnswer ? CORRECT_ANSWER : UNCORRECT_ANSWER;
    state.setGameResults(result, isArtistCategory);

    const checkedOptionElement = document.querySelectorAll('.option-id')[index];
    const checkedOptionElementClassName = isCorrectAnswer ? 'correct' : 'wrong';
    checkedOptionElement.classList.add(checkedOptionElementClassName);

    const infoPopupEl = document.querySelector('.popup-info-id');
    infoPopupEl.classList.remove('hide');
    const infoPopupContainerElClassName = isCorrectAnswer ? 'info-popup-correct' : 'info-popup-wrong';
    infoPopupEl.querySelector('.popup-content').classList.add(infoPopupContainerElClassName);
  };

  const optionsElement = htmlToElement(OptionsHTML);

  if (!isArtistCategory) {
    optionsElement.classList.add('options-image');
  }

  options.forEach((option, index) => {
    const btnTitle = isArtistCategory ? option : '';
    const btnClassName = isArtistCategory ? 'option-btn' : 'option-image-btn';

    const button = Button({
      onClick: () => {
        onOptionClickHandler(option, index);
      },
      title: btnTitle,
      className: btnClassName,
    });

    button.classList.add('option-id');

    if (!isArtistCategory) {
      const buttonImg = ImageComponent({
        file: option + IMAGE_FILE_EXTENSION,
        alt: `Катрина ${index}`,
        className: 'option-image-btn-image',
      });

      button.appendChild(buttonImg);
    }

    optionsElement.appendChild(button);
  });

  const infoPopupElement = InfoPopup({
    onClick: onPopupInfoBtnClickHandler,
    title: 'Продолжить',
    artist: correctArtist,
    paintingName: infoPaintingName,
    paintingYear: infoPaintingYear,
    paintingFile: correctPainting,
  });
  optionsElement.appendChild(infoPopupElement);

  const gameEndPopupElement = GameEndPopup({ onClick: onPopupGameEndBtnClickHandler, className: 'popup-endgame-id' });
  optionsElement.appendChild(gameEndPopupElement);

  return optionsElement;
};

export default Options;
