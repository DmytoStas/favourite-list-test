import { common } from '../partials/common';
import { findProductByID } from './findProductByID';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const favArray = JSON.parse(localStorage.getItem(common.KEY_favorite)) ?? [];

function addToFavList() {
  const favButtonsArr = document.querySelectorAll('.js-favorite');
  favButtonsArr.forEach(button => {
    button.addEventListener('click', onfavoriteClick);
  });
}

function onfavoriteClick(e) {
  e.preventDefault();
  const product = findProductByID(e.target);

  if (favArray.some(({ id }) => id === product.id)) {
    Notify.info('This item has alredy been added to favorite list!');
    return;
  }

  favArray.push(product);
  localStorage.setItem(common.KEY_favorite, JSON.stringify(favArray));
  Notify.success('Item added to favorite list');
}

export { addToFavList, onfavoriteClick };
