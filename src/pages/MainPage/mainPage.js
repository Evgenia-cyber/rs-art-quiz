import htmlToElement from '../../utils/htmlToElement';
import MainPageHTML from './mainPage.html';
import Title from '../../components/Title/title';
import Card from '../../components/Card/card';

import './mainPage.scss';
import { ARTIST, PAINTING } from '../../constants';

const categories = [ARTIST, PAINTING];

const onClickHandler = (category) => {
  console.log(category);
};

const MainPage = () => {
  const mainPageElement = htmlToElement(MainPageHTML);
  const СustomTitle = Title({ title: 'Главная' });
  mainPageElement.appendChild(СustomTitle);

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
