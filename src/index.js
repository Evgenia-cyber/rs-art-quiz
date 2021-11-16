import FirstPage from './pages/FirstPage/firstPage';
import MainPage from './pages/MainPage/mainPage';
import { FIRST_PAGE_URL, MAIN_PAGE_URL } from './constants';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

import './index.scss';

const TEMPLATES = {
  [FIRST_PAGE_URL]: FirstPage,
  [MAIN_PAGE_URL]: MainPage,
};

const renderPage = () => {
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

// прослушать все изменения URL:
window.addEventListener('popstate', renderPage);

// прослушать загрузку страницы:
window.addEventListener('load', renderPage);
