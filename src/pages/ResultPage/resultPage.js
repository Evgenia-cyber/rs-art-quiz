import htmlToElement from '../../utils/htmlToElement';
import ResultPageHTML from './resultPage.html';
import Title from '../../components/Title/title';
import Card from '../../components/Card/card';
import { IMAGE_FILE_EXTENSION, CORRECT_ANSWER, ARTIST, MAIN_PAGE_URL } from '../../constants';
import getDataFromLocalStorage from '../../utils/getDataFromLocalStorage';
import InfoPopup from '../../components/InfoPopup/infoPopup';
import state from '../../State';

import './resultPage.scss';
import redirectTo from '../../utils/redirectTo';

const onCloseBtnClickHandler = () => {
  const popupEl = document.querySelector('.info-result-id');
  popupEl.parentNode.removeChild(popupEl);
};

const onClickHandler = (imageNum) => {
  const infoData = state.getInfoAboutPainting(imageNum);

  const { author: artist, name: paintingName, year: paintingYear } = infoData;

  const infoPopupElement = InfoPopup({
    onClick: onCloseBtnClickHandler,
    title: 'Закрыть',
    artist,
    paintingName,
    paintingYear,
    paintingFile: imageNum,
  });
  infoPopupElement.classList.remove('hide');
  infoPopupElement.classList.add('info-result-id');

  const mainEl = document.querySelector('main');
  mainEl.appendChild(infoPopupElement);
};

const ResultPage = () => {
  const category = state.getCategory();
  if (!category) {
    redirectTo(MAIN_PAGE_URL);
  }
  const isArtistCategory = category === ARTIST.title;

  const dataFromLocalStorage = getDataFromLocalStorage(category);

  const resultPageElement = htmlToElement(ResultPageHTML);

  const roundNumberForTitle = state.getCurrentRoundForResultPage();

  const customTitle = Title({ title: `Результаты ${roundNumberForTitle} раунда` });
  resultPageElement.appendChild(customTitle);

  const roundNumber = isArtistCategory ? roundNumberForTitle : roundNumberForTitle + state.getDifference();

  const roundField = `round ${roundNumber}`;

  const { image: firstImage, results } = dataFromLocalStorage[roundField];

  const pageContent = document.createElement('div');
  pageContent.classList.add('cards');
  pageContent.classList.add('result-page-cards');

  results.forEach((item, index) => {
    const isActive = item === CORRECT_ANSWER;

    const imageNum = firstImage + index;

    const card = Card({
      file: `${imageNum}${IMAGE_FILE_EXTENSION}`,
      alt: `изображение ${index + 1}`,
      imageClassName: 'result-page-image',
      onClick: () => onClickHandler(imageNum),
      title: 'Инфо',
      buttonClassName: 'result-page-btn',
      isActive,
    });

    pageContent.appendChild(card);
  });

  resultPageElement.appendChild(pageContent);

  return resultPageElement;
};

export default ResultPage;
