import { findProductByID } from './findProductByID';
import { common } from '../partials/common';
import { renderCardsMarcup } from './renderCardsMarcup';
import { Notify } from 'notiflix';

let data = JSON.parse(localStorage.getItem(common.KEY_favorite));

function addRemoveBtnsEvtListener() {
  const removeButtonsArr = document.querySelectorAll('.js-favorite-remove');
  removeButtonsArr.forEach(button => {
    button.addEventListener('click', onRemoveFavClick);
  });
}

function onRemoveFavClick(e) {
  e.preventDefault();
  const product = findProductByID(e.target);

  data = data.filter(({ id }) => id !== product.id);
  renderCardsMarcup(data);
  localStorage.setItem(common.KEY_favorite, JSON.stringify(data));
  addRemoveBtnsEvtListener();
  Notify.warning('Item has been removed');
}

export { addRemoveBtnsEvtListener, onRemoveFavClick };
