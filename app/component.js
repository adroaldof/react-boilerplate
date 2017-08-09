export default (text = 'oe') => {
  const element = document.createElement('div');

  element.innerHTML = text;

  return element;
}
