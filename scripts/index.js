const container = document.querySelector('.places__list');

function addCard({name, link}) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardElement.querySelector('.card__image').src = link;
    cardElement.querySelector('.card__image').alt = name;
    cardElement.querySelector('.card__title').textContent = name;
    deleteButton.addEventListener('click', function() {
        cardElement.remove();
      }
    );
    container.prepend(cardElement);
}

initialCards.forEach(addCard);