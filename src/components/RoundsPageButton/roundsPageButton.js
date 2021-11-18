import htmlToElement from '../../utils/htmlToElement';
import Button from '../Button/button';
import RoundsPageButtonHTML from './roundsPageButton.html';

import './roundsPageButton.scss';

const RoundsPageButton = ({
  onRoundBtnClick,
  roundBtnTitle,
  classNameRoundBtn = '',
  onResultBtnClick,
  resultBtnTitle,
  classNameResultBtn = '',
  isActive = true,
}) => {
  const roundsPageButtonElement = htmlToElement(RoundsPageButtonHTML);

  const roundButton = Button({ onClick: onRoundBtnClick, title: roundBtnTitle, className: classNameRoundBtn });
  roundsPageButtonElement.appendChild(roundButton);

  if (isActive) {
    const resultButton = Button({ onClick: onResultBtnClick, title: resultBtnTitle, className: classNameResultBtn });
    roundsPageButtonElement.appendChild(resultButton);
  }

  return roundsPageButtonElement;
};

export default RoundsPageButton;
