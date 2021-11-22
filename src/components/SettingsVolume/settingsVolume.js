import htmlToElement from '../../utils/htmlToElement';
import SettingsVolumeHTML from './settingsVolume.html';
import Icon from '../Icon/icon';
import TextComponent from '../Text/text';
import paintProgressBackground from '../../utils/paintProgressBackground';
import volumeOnImg from '../../assets/icons/volume-on.svg';
import volumeOffImg from '../../assets/icons/volume-off.svg';
import { DEFAULT_VOLUME, MAX_PERCENT } from '../../constants';
import state from '../../State';

import './settingsVolume.scss';
import Progress from '../Progress/progress';

const onVolumeIconClickHandler = () => {
  const progressEl = document.querySelector('.progress');

  const volumeImageEl = document.querySelector('.settings-volume-btn-image');
  const isActive = volumeImageEl.src === volumeOnImg;

  if (isActive) {
    volumeImageEl.src = volumeOffImg;
    state.setVolumeSettings(0);
    progressEl.style.background = paintProgressBackground(0);
    progressEl.value = 0;
  } else {
    const defaultValueForProgress = DEFAULT_VOLUME * MAX_PERCENT;

    volumeImageEl.src = volumeOnImg;
    state.setVolumeSettings(DEFAULT_VOLUME);
    progressEl.style.background = paintProgressBackground(defaultValueForProgress);
    progressEl.value = defaultValueForProgress;
  }
};

const SettingsVolume = () => {
  const { volume } = state.getSettings();

  const settingsVolumeElement = htmlToElement(SettingsVolumeHTML);

  const text = TextComponent({ text: 'Звук' });
  settingsVolumeElement.appendChild(text);

  const volumeIconSrc = volume === '0' ? volumeOffImg : volumeOnImg;
  const volumeIcon = Icon({
    onClick: onVolumeIconClickHandler,
    src: volumeIconSrc,
    alt: 'Звук',
    className: 'settings-volume-btn-image',
  });

  settingsVolumeElement.appendChild(volumeIcon);

  const progress = Progress({ volume });
  settingsVolumeElement.appendChild(progress);

  return settingsVolumeElement;
};

export default SettingsVolume;
