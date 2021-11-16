import htmlToElement from '../../utils/htmlToElement';
import CardHTML from './card.html';
import ImageComponent from '../Image/image';

import './card.scss';
import Button from '../Button/button';

const Card = ({ file, alt, imageClassName = '', onClick, title, buttonClassName = '' }) => {
  const cardElement = htmlToElement(CardHTML);

  const image = ImageComponent({ file, alt, className: imageClassName });
  cardElement.appendChild(image);

  const button = Button({ onClick, title, className: buttonClassName });
  cardElement.appendChild(button);

  return cardElement;
};

export default Card;
