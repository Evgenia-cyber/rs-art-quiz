import htmlToElement from '../../utils/htmlToElement';
import MainPageHTML from './mainPage.html';
import Title from '../../components/Title/title';
import Card from '../../components/Card/card';
import { ARTIST, PAINTING, ROUNDS_PAGE_URL } from '../../constants';
import changePage from '../../utils/changePage';
import state from '../../State';

import './mainPage.scss';

const categories = [ARTIST, PAINTING];

const onClickHandler = async (category) => {
  state.setCategory(category);
  await state.setAllDataAndQuestionsCount();
  changePage(ROUNDS_PAGE_URL);
};

const MainPage = () => {
  const mainPageElement = htmlToElement(MainPageHTML);
  const customTitle = Title({ title: 'Главная' });
  mainPageElement.appendChild(customTitle);

  const pageContent = document.createElement('div');
  pageContent.classList.add('cards');

  categories.forEach((item) => {
    const { title, alt, file } = item;
    const card = Card({
      file,
      alt,
      imageClassName: 'main-page-image',
      onClick: () => onClickHandler(title),
      title,
      buttonClassName: 'main-page-btn',
    });

    pageContent.appendChild(card);
  });

  mainPageElement.appendChild(pageContent);

  return mainPageElement;
};

export default MainPage;
