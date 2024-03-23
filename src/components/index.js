import '../pages/index.css';
import { addCards, avatarEdit, profileEdit, getInitialCards, getProfileData} from './api.js';
import { createCard, deleteBut, likeBut } from './card.js';
import { openPopup, closePopup, closePopupOverlay } from './modal.js';
import { enableValidation, clearValidation } from './validation.js';

const container = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const popupContainers = document.querySelectorAll('.popup')
const userForm = document.querySelector('.popup_type_edit');
const editProfileContent = userForm.querySelector('.popup__content');
const editProfileForm  = editProfileContent.querySelector('.popup__form');
const popupCloseFormButton = userForm.querySelector('.popup__close');
const popupAddButton = document.querySelector('.popup_type_new-card');
const plusPopupContent = popupAddButton.querySelector('.popup__content');
const plusPopupForm = plusPopupContent.querySelector('.popup__form');
const popupCloseAddButton = popupAddButton.querySelector('.popup__close');
const avatarPopup = document.querySelector('.popup_type_avatar_edit');
const avatarPopupContent = avatarPopup.querySelector('.popup__content');
const avatarPopupFrom = avatarPopupContent.querySelector('.popup__form');
const popupCloseAvatarButton = avatarPopup.querySelector('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardAddButton = document.querySelector('.profile__add-button');
const profileImg = document.querySelector('.profile__image');
const profileTitle = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const popupType = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const formElement = document.querySelector('.popup__form');

const newCardForm = document.querySelector(".popup_type_new-card");
const newCardContent = newCardForm.querySelector(".popup__content");
const avatarForm = avatarPopup.querySelector('.popup__form');
const inputAvatarUrl = avatarForm.querySelector('.popup__input_type_url');
const inputCardName = newCardContent.querySelector('.popup__input_type_card-name');
const inputPlaceUrl = newCardContent.querySelector('.popup__input_type_url');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

const promises = [getProfileData(), getInitialCards()];

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error'
};

enableValidation(validationConfig);

function openImage (evt) {
  popupImage.src = evt.src;
  popupImage.alt = evt.alt;
  popupCaption.textContent = evt.textContent;
  openPopup(popupType);
};

function handleUserFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, evt);
  profileEdit({name: nameInput.value, about: jobInput.value})
    .then((res) => {
      profileJob.textContent = res.about;
      profileTitle.textContent = res.name;
      closePopup(userForm);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt);
    })
};

function handleAddCard(evt) {
  evt.preventDefault();
  renderLoading(true, evt);
  addCards({name:inputCardName.value, link:inputPlaceUrl.value})
    .then((res) => {
      const card = createCard(res, deleteBut, likeBut, res.owner, openImage, cardTemplate);
      container.prepend(card);
      closePopup(popupAddButton);
      nameNewPlaceInput.value = '';
      urlNewPlaceInput.value = '';
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt);
    })
}

function handleEditAvatar(evt) {
  evt.preventDefault();
  renderLoading(true, evt);
  avatarEdit(inputAvatarUrl.value)
    .then((res) => {
      profileImg.style.backgroundImage = `url('${res.avatar}')`;
      closePopup(avatarPopup);
      inputAvatarUrl.value = '';
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false, evt);
    })
}

function renderLoading(loading, popup) {
  const popupButton = popup.target.querySelector('.popup__button');
  if (loading) {
    popupButton.textContent = 'Сохранение...';
  } else {
    popupButton.textContent = 'Сохранить';
  }
}

profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  clearValidation(editProfileForm, validationConfig)
  openPopup(userForm);
});

newCardAddButton.addEventListener('click', () => {
  inputCardName.value = '';
  inputPlaceUrl.value = '';
  clearValidation(plusPopupForm, validationConfig);
  openPopup(popupAddButton);
});

profileImg.addEventListener('click', () => {
  inputPlaceUrl.value = '';
  clearValidation(avatarPopupFrom, validationConfig);
  openPopup(avatarPopup);
});

popupCloseFormButton.addEventListener('click', () => closePopup(userForm));
popupCloseAddButton.addEventListener('click', () => closePopup(popupAddButton));
popupCloseAvatarButton.addEventListener('click', () => closePopup(avatarPopup));
popupType.addEventListener('click', () => closePopup(popupType));
popupContainers.forEach((item) => {item.addEventListener('click', closePopupOverlay)})

formElement.addEventListener('submit', handleUserFormSubmit);
newPlaceForm.addEventListener('submit',  handleAddCard);
avatarForm.addEventListener('submit', handleEditAvatar);



Promise.all(promises)
  .then(([data, initialCards]) => {
    profileTitle.textContent = data.name;
    profileJob.textContent = data.about;
    profileImg.style.backgroundImage = `url('${data.avatar}')`;

    initialCards.forEach(cardElement => {
      const card = createCard(cardElement, deleteBut, likeBut, openImage, data, cardTemplate);
      container.append(card);
    });
  })
  .catch((err) => {
    console.log(err);
  });