import htmlToElement from '../../utils/htmlToElement';
import DotsHTML from './dots.html';
import Dot from '../Dot/dot';
import { CORRECT_ANSWER, UNCORRECT_ANSWER } from '../../constants';

import './dots.scss';

const Dots = ({ dots, activeDot, className = '' }) => {
  const dotsElement = htmlToElement(DotsHTML);

  if (className) {
    dotsElement.classList.add(className);
  }

  dots.forEach((dot, index) => {
    let dotClass;
    const isActive = index === activeDot;
    switch (dot) {
      case CORRECT_ANSWER:
        dotClass = 'dot-correct';
        break;
      case UNCORRECT_ANSWER:
        dotClass = 'dot-wrong';
        break;
      default:
        dotClass = isActive ? 'dot-active' : 'dot-not-active';
    }

    const dotElement = Dot({ className: dotClass });

    dotsElement.appendChild(dotElement);
  });

  return dotsElement;
};

export default Dots;
