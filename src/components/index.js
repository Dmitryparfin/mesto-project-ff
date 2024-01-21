import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, deleteBut, likeBut} from './card.js';
import {openPopup, closePopup, closePopupOverlay} from './modal.js';


function openImage (evt) {
  const popupImage = document.querySelector('.popup__image');
  const popupCaption = document.querySelector('.popup__caption');
  const popupType = document.querySelector('.popup_type_image');

  popupImage.src = evt.src;
  popupImage.alt = evt.alt;
  popupCaption.textContent = evt.textContent;
  
  openPopup(popupType);
}


const container = document.querySelector('.places__list');

function addCards () {
  initialCards.forEach((cardElement) => {
    const card = createCard(cardElement, deleteBut, likeBut, openImage);
    container.prepend(card);
  });
}


const popupContainers = document.querySelectorAll('.popup')
const profileEditButton = document.querySelector ('.profile__edit-button');
const profileAddButton = document.querySelector ('.profile__add-button');
const userForm = document.querySelector('.popup_type_edit');
const popupAddButton = document.querySelector('.popup_type_new-card');
const popupCloseAddButton = popupAddButton.querySelector('.popup__close');
const popupCloseFormButton = userForm.querySelector('.popup__close');


profileAddButton.addEventListener('click', () => openPopup(popupAddButton));
profileEditButton.addEventListener('click', () => openPopup(userForm));

popupCloseFormButton.addEventListener('click', () => closePopup(userForm));
popupCloseAddButton.addEventListener('click', () => closePopup(popupAddButton));
popupContainers.forEach((item) => {item.addEventListener('click', closePopupOverlay)})


const formElement  = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileDescrip = document.querySelector('.profile__description');
const nameInput = formElement .querySelector('.popup__input_type_name');
const jobInput  = formElement .querySelector('.popup__input_type_description');

nameInput.value = profileName.textContent;
jobInput .value = profileDescrip.textContent;


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileDescrip.textContent = jobInput .value;
  profileName.textContent = nameInput.value;
  closePopup(userForm);
}

formElement .addEventListener('submit', handleFormSubmit);


const newPlace = document.forms['new-place'];
const inputCardName = newPlace.querySelector('.popup__input_type_card-name');
const inputCardurl = newPlace.querySelector('.popup__input_type_url');

function addNewCard (evt) {
  evt.preventDefault();
  const newCard = createCard({name: inputCardName.value, link: inputCardurl.value}, deleteBut, likeBut, openImage);
  container.prepend(newCard);
  closePopup(popupAddButton);
  newPlace.reset();
}

newPlace.addEventListener('submit', addNewCard);

addCards();