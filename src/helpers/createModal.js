// import 'basiclightbox/dist/basiclightbox.min.css';
import * as basicLightbox from 'basiclightbox';

import { closeModal } from './closeModal';
import { onfavoriteClick } from './addToFavList';
import { onRemoveFavClick } from './addRemoveBtnsEvtListeners';
import { refs } from '../partials/refs';

let modalFavButton = {};

function createModal(product) {
  let instance = {};
  const options = {
    handler: null,
    onShow(instance) {
      this.handler = closeModal.bind(instance);
      document.addEventListener('keydown', this.handler);
    },

    onClose() {
      document.removeEventListener('keydown', this.handler);
      modalFavButton.removeEventListener('click', onfavoriteClick);
    },
  };

  if (!refs.cardList.hasAttribute('data-fav')) {
    instance = basicLightbox.create(
      `
	<div class="modal" data-id="${product.id}">
    <img src="${product.img}" alt="${product.name}" width="300">
    <h2>${product.name}</h2>
    <h3>${product.price} uah</h3>
    <p>${product.description}</p>
    <div>
        <button type="button" class="js-modal-add-fav-btn">Add to favorite</button>
      </div>
</div>
`,
      options
    );
  } else {
    instance = basicLightbox.create(
      `
	<div class="modal" data-id="${product.id}">
    <img src="${product.img}" alt="${product.name}" width="300">
    <h2>${product.name}</h2>
    <h3>${product.price} uah</h3>
    <p>${product.description}</p>
    <div>
        <button type="button" class="js-modal-remove-fav-btn">Remove from favorite</button>
      </div>
</div>
`,
      options
    );
  }

  instance.show(() => {
    if (!refs.cardList.hasAttribute('data-fav')) {
      modalFavButton = document.querySelector('.js-modal-add-fav-btn');
      modalFavButton.addEventListener('click', onfavoriteClick);
    } else {
      modalFavButton = document.querySelector('.js-modal-remove-fav-btn');
      modalFavButton.addEventListener('click', e => {
        onRemoveFavClick(e);
        instance.close();
      });
    }
  });
}

export { createModal };
