
const cardTemplate = document.querySelector('#card-template').content;

function createCard({name, link}, deleteBut, likeBut, openImage) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const cardImage = cardElement.querySelector('.card__image');

  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__title').textContent = name;
  
  deleteButton.addEventListener('click', () =>
    deleteBut(cardElement)
  );

  likeButton.addEventListener('click', () =>
    likeBut(likeButton)
  );
  
  cardImage.addEventListener('click', () =>
    openImage(cardImage)
  );

  return cardElement;
}

function deleteBut(cardElement) {
    cardElement.remove(); 
  }
  
  function likeBut(likeBut) {
    likeBut.classList.toggle('card__like-button_is-active');
  }

export {createCard, deleteBut, likeBut}