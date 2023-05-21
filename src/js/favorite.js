import { renderCardsMarcup } from '../helpers/renderCardsMarcup';
import { common } from '../partials/common';
import { refs } from '../partials/refs';
import { openModalHendler } from '../helpers/openModalHendler';
import { addRemoveBtnsEvtListener } from '../helpers/addRemoveBtnsEvtListeners';

const data = JSON.parse(localStorage.getItem(common.KEY_favorite));

refs.cardList.setAttribute('data-fav', 'true');
renderCardsMarcup(data);
refs.cardList.addEventListener('click', openModalHendler);

addRemoveBtnsEvtListener();
