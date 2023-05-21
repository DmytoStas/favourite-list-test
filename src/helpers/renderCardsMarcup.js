import { refs } from '../partials/refs.js';

export function renderCardsMarcup(data) {
  let cardsMurcup = '';

  if (!data || data.length === 0) {
    cardsMurcup = `<li class="js-card">
      <h1>There are no favorite items!</h1>
    </li>`;
    refs.cardList.innerHTML = cardsMurcup;
    return;
  }

  if (refs.cardList.hasAttribute('data-fav')) {
    cardsMurcup = data
      .map(
        instrument => `<li data-id="${instrument.id}" class="js-card">
      <img src="${instrument.img}" alt="${instrument.name}" width="300"/>
      <h3>${instrument.name}</h3>
      <p class="js-info">${instrument.price} uah</p>
      <button class="js-favorite-remove" type="button">Remove from favorite</button>
    </li>`
      )
      .join('');
  } else {
    cardsMurcup = data
      .map(
        instrument => `<li data-id="${instrument.id}" class="js-card">
      <img src="${instrument.img}" alt="${instrument.name}" width="300"/>
      <h3>${instrument.name}</h3>
      <p class="js-info">${instrument.price} uah</p>
      <button class="js-favorite" type="button">Favorite</button>
    </li>`
      )
      .join('');
  }

  refs.cardList.innerHTML = cardsMurcup;
}
