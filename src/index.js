import FirstPage from './pages/FirstPage/firstPage';
import MainPage from './pages/MainPage/mainPage';
import RoundsPage from './pages/RoundsPage/roundsPage';
import {
  FIRST_PAGE_URL,
  MAIN_PAGE_URL,
  ROUNDS_PAGE_URL,
  CHANGE_PAGE_EVENT,
  GAME_PAGE_URL,
  RESULT_PAGE_URL,
  SETTINGS_PAGE_URL,
} from './constants';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import GamePage from './pages/GamePage/gamePage';
import ResultPage from './pages/ResultPage/resultPage';
import SettingsPage from './pages/SettingsPage/settingsPage';
import setDataToLocalStorage from './utils/setDataToLocalStorage';
import state from './State';

import './index.scss';

const TEMPLATES = {
  [FIRST_PAGE_URL]: FirstPage,
  [MAIN_PAGE_URL]: MainPage,
  [ROUNDS_PAGE_URL]: RoundsPage,
  [GAME_PAGE_URL]: GamePage,
  [RESULT_PAGE_URL]: ResultPage,
  [SETTINGS_PAGE_URL]: SettingsPage,
};

const renderPage = () => {
  state.initSettings();

  const root = document.querySelector('body');
  root.innerHTML = '';
  const url = window.location.pathname;
  if (url === FIRST_PAGE_URL) {
    root.append(TEMPLATES[url]());
  } else {
    root.append(Header());
    root.append(TEMPLATES[url]());
    root.append(Footer());
  }
};

const saveDataToLocalStorage = () => {
  const volume = document.querySelector('.progress').value;

  // TODO: сохранить в local storage, после реализации таймера. Пока дефолтное значение 30
  const timer = 30;

  setDataToLocalStorage('settings', { volume, timer });
};

// прослушать все изменения URL:
// window.addEventListener('popstate', renderPage1);
window.addEventListener(CHANGE_PAGE_EVENT, renderPage);

// прослушать загрузку страницы:
window.addEventListener('load', renderPage);

window.addEventListener('beforeunload', saveDataToLocalStorage); // перед перезагрузкой или закрытием страницы (событие beforeunload) данные нужно сохранить
