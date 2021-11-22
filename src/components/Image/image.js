import { IMAGES_URL } from '../../constants';
import htmlToElement from '../../utils/htmlToElement';
import ImageHTML from './image.html';

import './image.scss';

const ImageComponent = ({ file, alt, className = '' }) => {
  const imageElement = htmlToElement(ImageHTML);

  const image = new Image();
  image.src = `${IMAGES_URL}${file}`;
  image.alt = alt;

  if (className) {
    image.classList.add(className);
  }

  image.onload = () => {
    imageElement.appendChild(image);
  };

  return imageElement;
};

export default ImageComponent;
