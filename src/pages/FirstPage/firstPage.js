import htmlToElement from '../../utils/htmlToElement';
import FirstPageHTML from './firstPage.html';
import Button from '../../components/Button/button';
import changePage from '../../utils/changePage';
import { MAIN_PAGE_URL } from '../../constants';

import './firstPage.scss';

const onClickHandler = () => {
  changePage(MAIN_PAGE_URL);
};

const FirstPage = () => {
  const firstPageElement = htmlToElement(FirstPageHTML);

  const customButton = Button({ onClick: onClickHandler, title: 'Начать игру', className: 'first-page-btn' });

  firstPageElement.appendChild(customButton);

  return firstPageElement;
};

export default FirstPage;
