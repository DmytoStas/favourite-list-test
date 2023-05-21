import { createModal } from './createModal';
import { findProductByID } from './findProductByID';

export function openModalHendler(e) {
  e.preventDefault();

  if (
    e.target.closest('.js-card') &&
    !e.target.classList.contains('js-favorite') &&
    !e.target.classList.contains('js-favorite-remove')
  ) {
    const product = findProductByID(e.target);
    createModal(product);
  }
}
