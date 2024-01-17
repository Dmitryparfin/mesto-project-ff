const arhizImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg', import.meta.url);
const donguzorunImage = new URL('../images/Donguzorun.jpg', import.meta.url);
const ushbaImage = new URL('../images/Ushba.jpg', import.meta.url);
const kamchatkaImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg', import.meta.url);
const holmogorskImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg', import.meta.url);
const baikalImage = new URL('https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg', import.meta.url);

export const initialCards = [
    {
      name: "Архыз",
      link: arhizImage
    },
    {
      name: "Донгузорун",
      link: donguzorunImage
    },
    {
      name: "Ушба",
      link: ushbaImage
    },
    {
      name: "Камчатка",
      link: kamchatkaImage
    },
    {
      name: "Холмогорский район",
      link: holmogorskImage
    },
    {
      name: "Байкал",
      link: baikalImage
    }
];