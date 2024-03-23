(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-8",headers:{authorization:"f2b76e93-221b-45e2-8e87-cac25d973a49","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Упс: ".concat(e.status))};function n(e,t,n,r,o,c){var u=c.querySelector(".card").cloneNode(!0),a=u.querySelector(".card__delete-button"),i=u.querySelector(".card__image"),l=u.querySelector(".card__like-button"),s=u.querySelector(".card__like-counter"),p=u.querySelector(".card__title");return e.owner._id===o._id?a.style.display="block":a.style.display="none",e.likes.some((function(e){return e._id===o._id}))&&l.classList.add("card__like-button_is-active"),i.src=e.link,i.alt=e.name,p.textContent=e.name,s.textContent=e.likes.length,a.addEventListener("click",(function(){return t(u,e._id)})),i.addEventListener("click",(function(){return r(i)})),l.addEventListener("click",(function(){return n(l,e,s)})),u}function r(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))})(r).then((function(){n.remove()})).catch((function(e){console.log(e)}))}function o(n,r,o){var c;n.classList.contains("card__like-button_is-active")?(c=r._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(c),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))}(r._id).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function i(e){e.target.classList.contains("popup")&&u(e.target)}var l=function(e,t,n){t.validity.valid?p(e,t,n):t.validity.patternMismatch?s(e,t,t.dataset.errorMessage,n):s(e,t,t.validationMessage,n)},s=function(e,t,n,r){var o=e.querySelector(".".concat(t.classList[1],"_error"));t.classList.add(r.inputErrorClass),o.textContent=n},p=function(e,t,n){var r=e.querySelector(".".concat(t.classList[1],"_error"));t.classList.remove(n.inputErrorClass),r.textContent=""},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disable=!1,t.classList.remove(n.inactiveButtonClass)):(t.disable=!0,t.classList.add(n.inactiveButtonClass))},f=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){p(e,n,t)})),d(n,r,t)};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=document.querySelector(".places__list"),m=document.querySelector("#card-template").content,v=document.querySelectorAll(".popup"),h=document.querySelector(".popup_type_edit"),S=h.querySelector(".popup__content").querySelector(".popup__form"),b=h.querySelector(".popup__close"),q=document.querySelector(".popup_type_new-card"),g=q.querySelector(".popup__content").querySelector(".popup__form"),E=q.querySelector(".popup__close"),L=document.querySelector(".popup_type_avatar_edit"),k=L.querySelector(".popup__content").querySelector(".popup__form"),C=L.querySelector(".popup__close"),A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),w=document.querySelector(".profile__image"),U=document.querySelector(".profile__title"),j=document.querySelector(".profile__description"),O=document.querySelector(".popup_type_image"),P=document.querySelector(".popup__image"),T=document.querySelector(".popup__caption"),B=document.querySelector(".popup__form"),I=document.querySelector(".popup_type_new-card"),D=I.querySelector(".popup__content"),N=L.querySelector(".popup__form"),M=N.querySelector(".popup__input_type_url"),J=D.querySelector(".popup__input_type_card-name"),H=D.querySelector(".popup__input_type_url"),z=B.querySelector(".popup__input_type_name"),$=B.querySelector(".popup__input_type_description"),F=[fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)}))],G={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error"};function K(e){P.src=e.src,P.alt=e.alt,T.textContent=e.textContent,c(O)}function Q(e,t){t.target.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()}));var n=Array.from(t.querySelectorAll(e.inputSelector)),r=t.querySelector(e.submitButtonSelector);d(n,r,e),n.forEach((function(o){o.addEventListener("input",(function(){l(t,o,e),d(n,r,e)}))})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){l(e,o,t),d(n,r,t)}))}))}(t,e)}))}(G),A.addEventListener("click",(function(){z.value=U.textContent,$.value=j.textContent,f(S,G),c(h)})),x.addEventListener("click",(function(){J.value="",H.value="",f(g,G),c(q)})),w.addEventListener("click",(function(){H.value="",f(k,G),c(L)})),b.addEventListener("click",(function(){return u(h)})),E.addEventListener("click",(function(){return u(q)})),C.addEventListener("click",(function(){return u(L)})),O.addEventListener("click",(function(){return u(O)})),v.forEach((function(e){e.addEventListener("click",i)})),B.addEventListener("submit",(function(n){n.preventDefault(),Q(!0,n),function(n){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify(n)}).then((function(e){return t(e)}))}({name:z.value,about:$.value}).then((function(e){j.textContent=e.about,U.textContent=e.name,u(h)})).catch((function(e){console.log(e)})).finally((function(){Q(!1,n)}))})),I.addEventListener("submit",(function(c){c.preventDefault(),Q(!0,c),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify(n)}).then((function(e){return t(e)}))}({name:J.value,link:H.value}).then((function(e){var t=n(e,r,o,e.owner,K,m);y.prepend(t),u(q),nameNewPlaceInput.value="",urlNewPlaceInput.value=""})).catch((function(e){console.log(e)})).finally((function(){Q(!1,c)}))})),N.addEventListener("submit",(function(n){var r;n.preventDefault(),Q(!0,n),(r=M.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){w.style.backgroundImage="url('".concat(e.avatar,"')"),u(L),M.value=""})).catch((function(e){console.log(e)})).finally((function(){Q(!1,n)}))})),Promise.all(F).then((function(e){var t,c,u=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,c)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],i=u[1];U.textContent=a.name,j.textContent=a.about,w.style.backgroundImage="url('".concat(a.avatar,"')"),i.forEach((function(e){var t=n(e,r,o,K,a,m);y.append(t)}))})).catch((function(e){console.log(e)}))})();