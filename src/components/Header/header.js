import htmlToElement from '../../utils/htmlToElement';
import HeaderHtml from './header.html';
import Icon from '../Icon/icon';
import logoImg from '../../assets/icons/logo.svg';
import settingsImg from '../../assets/icons/settings.svg';
import fullscreenOffImg from '../../assets/icons/fullscreen-off.svg';
import changePage from '../../utils/changePage';
import { MAIN_PAGE_URL, SETTINGS_PAGE_URL } from '../../constants';

import './header.scss';

const onLogoClick = () => {
  changePage(MAIN_PAGE_URL);
};

const onFullScreenClick = () => {
  console.log(3);
};

const onSettingsClick = () => {
  changePage(SETTINGS_PAGE_URL);
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
