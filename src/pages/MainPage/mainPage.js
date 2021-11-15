import htmlToElement from '../../utils/htmlToElement';
import MainPageHTML from './mainPage.html';
import Title from '../../components/Title/title';
// import Button from '../../components/Button/button';

import './mainPage.scss';

// const onClickHandler = () => {
//   console.log(1);
// };

const MainPage = () => {
  const mainPageElement = htmlToElement(MainPageHTML);
  // const СustomButton = Button({ onClick: onClickHandler, title: 'Начать игру', className: 'first-page-btn' });
  const СustomTitle = Title({ title: 'Главная' });
  mainPageElement.appendChild(СustomTitle);

  return mainPageElement;
};

export default MainPage;
