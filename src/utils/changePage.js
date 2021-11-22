import { CHANGE_PAGE_EVENT } from '../constants';

const changePage = (newUrl) => {
  window.history.pushState({}, null, newUrl);
  // window.history.go();
  // window.location.href = newUrl;
  const event = new Event(CHANGE_PAGE_EVENT);
  window.dispatchEvent(event);
};

export default changePage;
