import htmlToElement from '../../utils/htmlToElement';
import TextHTML from './text.html';

import './text.scss';

const Text = ({ text, className = '' }) => {
  const textElement = htmlToElement(TextHTML);

  if (className) {
    textElement.classList.add(className);
  }

  textElement.innerHTML = text;

  return textElement;
};

export default Text;
