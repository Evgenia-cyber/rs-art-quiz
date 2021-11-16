import htmlToElement from '../../utils/htmlToElement';
import IconHTML from './icon.html';

import './icon.scss';

const Icon = ({ onClick, src, alt, className = '' }) => {
  const iconElement = htmlToElement(IconHTML);

  // Пример использования картинки
  const icon = new Image();
  icon.src = src;
  icon.alt = alt;

  if (className) {
    icon.classList.add(className);
  }

  iconElement.appendChild(icon);

  iconElement.addEventListener('click', onClick);

  return iconElement;
};

export default Icon;
