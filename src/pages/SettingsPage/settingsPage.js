import htmlToElement from '../../utils/htmlToElement';
import SettingsPageHTML from './settingsPage.html';
import Title from '../../components/Title/title';
import SettingsVolume from '../../components/SettingsVolume/settingsVolume';

import './settingsPage.scss';

const SettingsPage = () => {
  const settingsPageElement = htmlToElement(SettingsPageHTML);
  const customTitle = Title({ title: 'Настройки' });
  settingsPageElement.appendChild(customTitle);

  const pageContent = document.createElement('div');
  pageContent.classList.add('cards');

  const volumeElement = SettingsVolume();

  pageContent.appendChild(volumeElement);

  settingsPageElement.appendChild(pageContent);

  return settingsPageElement;
};

export default SettingsPage;
