import htmlToElement from '../../utils/htmlToElement';
import RoundsPageHTML from './roundsPage.html';
import Title from '../../components/Title/title';
import Card from '../../components/Card/card';
import changePage from '../../utils/changePage';
import { IMAGE_FILE_EXTENSION, CHANK, GAME_PAGE_URL } from '../../constants';
import state from '../../State';

import './roundsPage.scss';

const onClickHandler = (index) => {
  state.setCurrentQuestionNumber(index);
  changePage(GAME_PAGE_URL);
};

const onResultBtnClickHandler = (roundNumber) => {
  console.log(2, roundNumber);
};

const RoundsPage = () => {
  const data = state.getImagesForRoundsPage();

  const roundsPageElement = htmlToElement(RoundsPageHTML);

  const title = state.getCategory();
  const customTitle = Title({ title });
  roundsPageElement.appendChild(customTitle);

  const pageContent = document.createElement('div');
  pageContent.classList.add('cards');
  pageContent.classList.add('rounds-page-cards');

  data.forEach((item, index) => {
    const { image, results } = item;
    const isActive = results.length > 0;
    // TODO: посчитать количество правильных ответов в results и добавить его в resultBtnTitle: ` / ${CHANK}`(чтобы было, например, 9 / 10)
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
      resultBtnTitle: ` / ${CHANK}`,
      classNameResultBtn: 'rounds-page-res-btn',
    });

    pageContent.appendChild(card);
  });

  roundsPageElement.appendChild(pageContent);

  return roundsPageElement;
};

export default RoundsPage;
