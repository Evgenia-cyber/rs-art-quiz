import { IMAGE_FILE_EXTENSION } from '../../constants';
import htmlToElement from '../../utils/htmlToElement';
import Button from '../Button/button';
import ImageComponent from '../Image/image';
import InfoPopupHTML from './infoPopup.html';
import TextComponent from '../Text/text';

import './infoPopup.scss';

const InfoPopup = ({ onClick, title, className = '', artist, paintingName, paintingYear, paintingFile }) => {
  const infoPopupElement = htmlToElement(InfoPopupHTML);
  const infoPopupContainerEl = infoPopupElement.querySelector('.popup-content');

  if (className) {
    infoPopupContainerEl.classList.add(className);
  }

  const imageElement = ImageComponent({
    file: paintingFile + IMAGE_FILE_EXTENSION,
    alt: paintingName,
    className: 'info-popup-img',
  });

  infoPopupContainerEl.appendChild(imageElement);

  const artistElement = TextComponent({ text: artist });
  infoPopupContainerEl.appendChild(artistElement);

  const paintingNameElement = TextComponent({ text: paintingName });
  infoPopupContainerEl.appendChild(paintingNameElement);

  const yearElement = TextComponent({ text: paintingYear });
  infoPopupContainerEl.appendChild(yearElement);

  const buttonElement = Button({ onClick, title });
  infoPopupContainerEl.appendChild(buttonElement);

  infoPopupElement.appendChild(infoPopupContainerEl);

  return infoPopupElement;
};

export default InfoPopup;
