import htmlToElement from '../../utils/htmlToElement';
import ButtonHTML from './button.html';

import './button.scss';

const Button = ({ onClick, title, className = '' }) => {
  const buttonElement = htmlToElement(ButtonHTML);

  if (className) {
    buttonElement.classList.add(className);
  }

  buttonElement.innerHTML = title;
  buttonElement.addEventListener('click', onClick);

  return buttonElement;
};

export default Button;
