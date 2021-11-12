import htmlToElement from '../../utils/htmlToElement';
import FirstPageHTML from './firstPage.html';
import Button from '../../components/Button/button';

import './firstPage.scss';

const onClickHandler = () => {
  console.log(1);
};

const FirstPage = htmlToElement(FirstPageHTML);
const СustomButton = Button({ onClick: onClickHandler, title: 'Начать игру', className: 'first-page-btn' });
FirstPage.appendChild(СustomButton);

export default FirstPage;
