import htmlToElement from '../../utils/htmlToElement';
import Button from '../Button/button';
import GameEndPopupHTML from './gameEndPopup.html';
import TextComponent from '../Text/text';

import './gameEndPopup.scss';

const GameEndPopup = ({ onClick, className = '' }) => {
  const gameEndPopupElement = htmlToElement(GameEndPopupHTML);

  const gameEndPopupContainerEl = gameEndPopupElement.querySelector('.popup-content');

  if (className) {
    gameEndPopupElement.classList.add(className);
  }

  const textElement = TextComponent({ text: 'Ваш результат:', className: 'result-id' });
  gameEndPopupContainerEl.appendChild(textElement);

  const buttonElement = Button({ onClick, title: 'Продолжить' });
  gameEndPopupContainerEl.appendChild(buttonElement);

  gameEndPopupElement.appendChild(gameEndPopupContainerEl);

  return gameEndPopupElement;
};

export default GameEndPopup;
