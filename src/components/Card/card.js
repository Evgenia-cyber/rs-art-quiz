import htmlToElement from '../../utils/htmlToElement';
import CardHTML from './card.html';
import ImageComponent from '../Image/image';
import Button from '../Button/button';
import RoundsPageButton from '../RoundsPageButton/roundsPageButton';

import './card.scss';

const Card = ({
  file,
  alt,
  imageClassName,
  onClick,
  title,
  buttonClassName,
  isActive = true,
  isRoundsPage = false,
  onResultBtnClick,
  resultBtnTitle,
  classNameResultBtn,
}) => {
  const cardElement = htmlToElement(CardHTML);

  if (!isActive) {
    cardElement.classList.add('not-active');
  }

  const image = ImageComponent({ file, alt, className: imageClassName });
  cardElement.appendChild(image);

  let button;
  if (isRoundsPage) {
    button = RoundsPageButton({
      onRoundBtnClick: onClick,
      roundBtnTitle: title,
      classNameRoundBtn: buttonClassName,
      onResultBtnClick,
      resultBtnTitle,
      classNameResultBtn,
      isActive,
    });
  } else {
    button = Button({ onClick, title, className: buttonClassName });
  }

  cardElement.appendChild(button);

  return cardElement;
};

export default Card;
