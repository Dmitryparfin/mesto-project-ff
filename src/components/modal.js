function openPopup(popup) {
    popup.classList.add('popup_is-animated');
    setTimeout(() => {
      popup.classList.add('popup_is-opened');
    })
    document.addEventListener('keydown', closePopupEsc)
  }
  
  function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupEsc);
  }
  
  function closePopupEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup(document.querySelector('.popup_is-opened'));
    }
  }
  
  function closePopupOverlay (evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
  }

  export {openPopup, closePopup, closePopupOverlay}