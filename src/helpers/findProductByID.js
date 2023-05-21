import { instruments } from '../partials/instruments';

export function findProductByID(item) {
  const itemId = Number(item.closest('[data-id]').dataset.id);
  return instruments.find(({ id }) => id === itemId);
}
