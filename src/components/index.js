import '../pages/index.css';
import {initialCards} from './cards.js';
import {createCard, deleteBut, likeBut} from './card.js';
import {openPopup, closePopup, closePopupOverlay} from './modal.js';

const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const popupType = document.querySelector('.popup_type_image');
const container = document.querySelector('.places__list');
const popupContainers = document.querySelectorAll('.popup')
const profileEditButton = document.querySelector ('.profile__edit-button');
const profileAddButton = document.querySelector ('.profile__add-button');
const userForm = document.querySelector('.popup_type_edit');
const popupAddButton = document.querySelector('.popup_type_new-card');
const popupCloseAddButton = popupAddButton.querySelector('.popup__close');
const popupCloseFormButton = userForm.querySelector('.popup__close');
const formElement  = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileDescrip = document.querySelector('.profile__description');
const nameInput = formElement .querySelector('.popup__input_type_name');
const jobInput  = formElement .querySelector('.popup__input_type_description');
const newPlace = document.forms['new-place'];
const inputCardName = newPlace.querySelector('.popup__input_type_card-name');
const inputCardurl = newPlace.querySelector('.popup__input_type_url');


function openImage (evt) {
  popupImage.src = evt.src;
  popupImage.alt = evt.alt;
  popupCaption.textContent = evt.textContent;
  openPopup(popupType);
}

function addCards () {
  initialCards.forEach((cardElement) => {
    const card = createCard(cardElement, deleteBut, likeBut, openImage);
    container.prepend(card);
  });
}

function editProfile () {
nameInput.value = profileName.textContent;
jobInput.value = profileDescrip.textContent;
openPopup(userForm);
}

function handleUserFormSubmit(evt) {
  evt.preventDefault();
  profileDescrip.textContent = jobInput.value;
  profileName.textContent = nameInput.value;
  closePopup(userForm);
}

function addNewCard (evt) {
  evt.preventDefault();
  const newCard = createCard({name: inputCardName.value, link: inputCardurl.value}, deleteBut, likeBut, openImage);
  container.prepend(newCard);
  closePopup(popupAddButton);
  newPlace.reset();
}


profileAddButton.addEventListener('click', () => openPopup(popupAddButton));
profileEditButton.addEventListener('click', editProfile);

popupCloseFormButton.addEventListener('click', () => closePopup(userForm));
popupCloseAddButton.addEventListener('click', () => closePopup(popupAddButton));
popupType.addEventListener('click', () => closePopup(popupType));
popupContainers.forEach((item) => {item.addEventListener('click', closePopupOverlay)})

formElement .addEventListener('submit', handleUserFormSubmit);
newPlace.addEventListener('submit', addNewCard);

addCards();