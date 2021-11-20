import htmlToElement from '../../utils/htmlToElement';
import OptionsHTML from './options.html';
import ImageComponent from '../Image/image';
import Button from '../Button/button';
import { IMAGE_FILE_EXTENSION } from '../../constants';

import './options.scss';

const Options = ({ options, isArtistCategory, correctArtist, correctPainting }) => {
  const onOptionClickHandler = (option) => {
    console.log(111, option, correctArtist, correctPainting); // '120' 'Альбрехт Дюрер' '120' ИЛИ  'Винсент Ван Гог' 'Павел Федотов' '0'

    // записать правильный/неправильный ответ в State.results

    // проверить, не последний ли вопрос const LAST_QUESTION = CHANK - 1; - показать попап с резульатом игры (удалить у него класс .hide) и сохранить данные в локал сторадже
    // после клика по продолжить перейти на страницу с раундами выбранной категории

    // иначе показать прав ответ попап (удалить у него класс .hide)
    // и увеличить номер вопроса на 1 и снова перейти на страницу вопроса, после клика продолжить в попапе
    // changePage(GAME_PAGE_URL);
  };

  const optionsElement = htmlToElement(OptionsHTML);

  if (!isArtistCategory) {
    optionsElement.classList.add('options-image');
  }

  options.forEach((option, index) => {
    const btnTitle = isArtistCategory ? option : '';
    const btnClassName = isArtistCategory ? 'option-btn' : 'option-image-btn';

    const button = Button({
      onClick: () => {
        onOptionClickHandler(option);
      },
      title: btnTitle,
      className: btnClassName,
    });

    if (!isArtistCategory) {
      const buttonImg = ImageComponent({
        file: option + IMAGE_FILE_EXTENSION,
        alt: `Катрина ${index}`,
        className: 'option-image-btn-image',
      });

      button.appendChild(buttonImg);
    }

    optionsElement.appendChild(button);
  });

  // добавить попап с правильным ответом с классом .hide
  // добавить попап с результатами с классом .hide

  return optionsElement;
};

export default Options;
