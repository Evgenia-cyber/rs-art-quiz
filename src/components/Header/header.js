import htmlToElement from '../../utils/htmlToElement';
import HeaderHtml from './header.html';
import Icon from '../Icon/icon';
import logoImg from '../../assets/icons/logo.svg';
import settingsImg from '../../assets/icons/settings.svg';
import fullscreenOffImg from '../../assets/icons/fullscreen-off.svg';

import './header.scss';

const onLogoClick = () => {
  console.log(2);
};

const onFullScreenClick = () => {
  console.log(3);
};

const onSettingsClick = () => {
  console.log(1);
};

const Header = () => {
  const headerElement = htmlToElement(HeaderHtml);
  const settingsElement = headerElement.querySelector('.settings');

  const logoIcon = Icon({
    onClick: onLogoClick,
    src: logoImg,
    alt: 'home',
    className: 'logo',
  });

  const fullScreenIcon = Icon({
    onClick: onFullScreenClick,
    src: fullscreenOffImg,
    alt: 'fullscreen',
  });

  const settingsIcon = Icon({
    onClick: onSettingsClick,
    src: settingsImg,
    alt: 'settings',
  });

  settingsElement.append(fullScreenIcon);
  settingsElement.append(settingsIcon);

  headerElement.append(logoIcon);
  headerElement.append(settingsElement);

  return headerElement;
};

export default Header;
