import { ARTIST, CATEGORIES_COUNT, CHANK, DEFAULT_TIMER_SECONDS, DEFAULT_VOLUME } from './constants';
import getDataFromJSON from './utils/getDataFromJSON';
import getDataFromLocalStorage from './utils/getDataFromLocalStorage';
import makeArrayFromObject from './utils/makeArrayFromObject';
import setDataToLocalStorage from './utils/setDataToLocalStorage';

// const state = {
//   settings: {
//     volume: DEFAULT_VOLUME,
//     timer: DEFAULT_TIMER_SECONDS,
//   },
//   category: '',
// };

// export default state;

class State {
  constructor() {
    //  if (!State.instance) {
    //     State.instance = this;
    //   }

    this.settings = {
      volume: DEFAULT_VOLUME,
      timer: DEFAULT_TIMER_SECONDS,
    };
    this.category = '';
    this.allData = [];
    this.questionsCount = 0;

    // eslint-disable-next-line no-constructor-return
    // return State.instance;
  }

  setCategory(category) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }

  async setAllDataAndQuestionsCount() {
    const data = await getDataFromJSON();
    this.allData = data;
    this.questionsCount = Math.floor(data.length / CATEGORIES_COUNT);
  }

  getImagesForRoundsPage() {
    const currentCategory = this.category;
    const data = getDataFromLocalStorage(currentCategory);

    if (data) {
      return makeArrayFromObject(data);
    }

    let startIndex;
    let endIndex;
    const defaultData = {};
    if (currentCategory === ARTIST.title) {
      startIndex = 0;
      endIndex = this.questionsCount;
    } else {
      startIndex = this.questionsCount;
      endIndex = CATEGORIES_COUNT * this.questionsCount;
    }
    for (let i = startIndex; i < endIndex; i += CHANK) {
      const field = `round ${i / 10 + 1}`;
      defaultData[field] = {
        image: i,
        results: [],
      };
    }

    setDataToLocalStorage(currentCategory, defaultData);
    return makeArrayFromObject(defaultData);
  }

  // async getQuestions() {
  //   const result = await doSomeAsyncStuff();
  //   return result;
  // }
}

const instance = new State();

export default instance;
