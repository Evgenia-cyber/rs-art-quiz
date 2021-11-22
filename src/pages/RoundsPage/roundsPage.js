import htmlToElement from '../../utils/htmlToElement';
import RoundsPageHTML from './roundsPage.html';
import Title from '../../components/Title/title';
import Card from '../../components/Card/card';
import changePage from '../../utils/changePage';
import {
  IMAGE_FILE_EXTENSION,
  CHANK,
  GAME_PAGE_URL,
  CORRECT_ANSWER,
  RESULT_PAGE_URL,
  MAIN_PAGE_URL,
} from '../../constants';
import state from '../../State';

import './roundsPage.scss';
import redirectTo from '../../utils/redirectTo';

const onClickHandler = (index) => {
  state.setCurrentQuestionNumber(index);
  changePage(GAME_PAGE_URL);
};

const onResultBtnClickHandler = (roundNumber) => {
  state.setCurrentRoundForResultPage(roundNumber);
  changePage(RESULT_PAGE_URL);
};

const RoundsPage = () => {
  const data = state.getImagesForRoundsPage();

  const roundsPageElement = htmlToElement(RoundsPageHTML);

  const title = state.getCategory();
  if (!title) {
    redirectTo(MAIN_PAGE_URL);
  }
  const customTitle = Title({ title });
  roundsPageElement.appendChild(customTitle);

  const pageContent = document.createElement('div');
  pageContent.classList.add('cards');
  pageContent.classList.add('rounds-page-cards');

  data.forEach((item, index) => {
    const { image, results } = item;
    const isActive = results.length > 0;

    const correctAnswersCount = results.filter((resultItem) => resultItem === CORRECT_ANSWER).length;

    const roundNumber = index + 1;

    const card = Card({
      file: `${image}${IMAGE_FILE_EXTENSION}`,
      alt: `изображение ${roundNumber}`,
      imageClassName: 'rounds-page-image',
      onClick: () => onClickHandler(index),
      title: `${roundNumber} раунд`,
      buttonClassName: 'rounds-page-btn',
      isActive,
      isRoundsPage: true,
      onResultBtnClick: () => onResultBtnClickHandler(roundNumber),
      resultBtnTitle: `${correctAnswersCount} / ${CHANK}`,
      classNameResultBtn: 'rounds-page-res-btn',
    });

    pageContent.appendChild(card);
  });

  roundsPageElement.appendChild(pageContent);

  return roundsPageElement;
};

export default RoundsPage;
