const container = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard({name, link}) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__title').textContent = name;

  deleteButton.addEventListener('click', () =>
    deleteCard(cardElement)
  );

  return cardElement;
}

function deleteCard(cardElement) {
  cardElement.remove(); 
}

initialCards.forEach(function (cardElement) {
  const card = createCard(cardElement);
  container.prepend(card);
});