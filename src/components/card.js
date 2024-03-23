import { deleteCard, addLike, removeLike} from './api.js';

function createCard(cardData, deleteBut, likeBut, openImage, data, cardTemplate) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCounter = cardElement.querySelector('.card__like-counter');
  const cardTitle = cardElement.querySelector('.card__title');


  if(cardData.owner._id === data._id) {
    deleteButton.style.display = 'block';
  } else {
    deleteButton.style.display = 'none';
  }

  if(cardData.likes.some(({ _id }) => _id === data._id)) {
    likeButton.classList.add('card__like-button_is-active');
  }

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  likeCounter.textContent = cardData.likes.length;
  

  deleteButton.addEventListener('click', () => deleteBut(cardElement, cardData._id));
  cardImage.addEventListener('click', () => openImage(cardImage));
  likeButton.addEventListener('click', () => likeBut(likeButton, cardData, likeCounter));

  return cardElement
}

function deleteBut(card, cardId) {
  deleteCard(cardId)
  .then(() => {
    card.remove()
  })
  .catch((err) => {
    console.log(err)
  })
}

function likeBut(evt, cardData, likeCounter) {
  if(!evt.classList.contains('card__like-button_is-active')) {
    addLike(cardData._id, 'PUT')
    .then((res) => {
      likeCounter.textContent = res.likes.length;
      evt.classList.toggle('card__like-button_is-active');
    })
    .catch((err) => {
      console.log(err);
    })
  }
  else {
    removeLike(cardData._id, 'DELETE')
    .then((res) => {
      likeCounter.textContent = res.likes.length;
      evt.classList.toggle('card__like-button_is-active');
    })
    .catch((err) => {
      console.log(err);
    })
  }
}

export {createCard, deleteBut, likeBut} 