import htmlToElement from '../../utils/htmlToElement';
import TitleHTML from './title.html';

import './title.scss';

const Title = ({ title, className = '' }) => {
  const titleElement = htmlToElement(TitleHTML);

  if (className) {
    titleElement.classList.add(className);
  }

  titleElement.innerHTML = title;

  return titleElement;
};

export default Title;
