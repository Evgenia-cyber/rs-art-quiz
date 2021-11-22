import { MAX_PERCENT } from '../../constants';
import htmlToElement from '../../utils/htmlToElement';
import paintProgressBackground from '../../utils/paintProgressBackground';
import ProgressHTML from './progress.html';
import volumeOffImg from '../../assets/icons/volume-off.svg';
import volumeOnImg from '../../assets/icons/volume-on.svg';
import correctSound from '../../assets/sounds/correct.mp3';
import sound from '../../utils/sound';
import state from '../../State';

import './progress.scss';

const onInputHandler = ({ target }) => {
  const { value } = target;
  const volume = value / MAX_PERCENT;

  const volumeImageEl = document.querySelector('.settings-volume-btn-image');

  if (value === '0') {
    volumeImageEl.src = volumeOffImg;
  } else {
    volumeImageEl.src = volumeOnImg;
  }

  state.setVolumeSettings(volume);

  // eslint-disable-next-line no-param-reassign
  target.style.background = paintProgressBackground(value);

  sound.playSound(correctSound, volume);
};

const Progress = ({ volume, className = '' }) => {
  const progressElement = htmlToElement(ProgressHTML);

  if (className) {
    progressElement.classList.add(className);
  }

  progressElement.value = volume;
  progressElement.style.background = paintProgressBackground(volume);

  progressElement.addEventListener('input', onInputHandler);

  return progressElement;
};

export default Progress;
