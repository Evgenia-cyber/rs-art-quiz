export default function (htmlString) {
  const template = document.createElement('template'); // в отличие от div, в 'template' можно положить что угодно
  template.innerHTML = htmlString;
  return template.content.firstChild; // получаем нужный элемент
}
