import htmlToElement from '../../utils/htmlToElement';
import DotHTML from './dot.html';

import './dot.scss';

const Dot = ({ className = '' }) => {
  const dotElement = htmlToElement(DotHTML);

  if (className) {
    dotElement.classList.add(className);
  }

  return dotElement;
};

export default Dot;
