import '../pages/index.css';
import {initialCards} from './cards.js';

const container = document.querySelector('.places__list');







initialCards.forEach(function (cardElement) {
  const card = createCard(cardElement, deleteCard);
  container.prepend(card);
});