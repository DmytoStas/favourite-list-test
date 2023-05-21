import '../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { renderCardsMarcup } from './helpers/renderCardsMarcup';
import { refs } from './partials/refs';
import { openModalHendler } from './helpers/openModalHendler';
import { addToFavList } from './helpers/addToFavList';
import { instruments } from './partials/instruments';

renderCardsMarcup(instruments);
refs.cardList.addEventListener('click', openModalHendler);

addToFavList();
// favourite-list-test\node_modules\basiclightbox\dist\basicLightbox.min.css
