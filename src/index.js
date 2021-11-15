import FirstPage from './pages/FirstPage/firstPage';
import MainPage from './pages/MainPage/mainPage';
import { FIRST_PAGE_URL, MAIN_PAGE_URL } from './constants';

import './index.scss';

const TEMPLATES = {
  [FIRST_PAGE_URL]: FirstPage,
  [MAIN_PAGE_URL]: MainPage,
};

const renderPage = () => {
  const root = document.querySelector('#root');
  root.innerHTML = '';
  const url = window.location.pathname;
  root.append(TEMPLATES[url]());
};

// прослушать все изменения URL:
window.addEventListener('popstate', renderPage);

// прослушать загрузку страницы:
window.addEventListener('load', renderPage);
