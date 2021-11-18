import { DATA_URL } from '../constants';

const getDataFromJSON = async () => {
  // const options = {
  //   mode: 'no-cors',
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };
  try {
    // const response = await fetch(DATA_URL, options);
    const response = await fetch(DATA_URL);
    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Error getting data', error);
    return null;
  }
};

export default getDataFromJSON;
