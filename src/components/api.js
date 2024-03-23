const config = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-8',
    headers: {
      authorization: 'f2b76e93-221b-45e2-8e87-cac25d973a49',
      'Content-Type': 'application/json'
  }
};

const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers,
    }).then((res) => {
      return checkResponse(res);
    });
  };

const removeLike = (cardId) => {
    return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers,
    }).then((res) => {
      return checkResponse(res);
    });
  };

const deleteCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  }).then((res) => {
    return checkResponse(res);
  });
};

const getProfileData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  }).then((res) => {
    return checkResponse(res);
  });
};

const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  }).then((res) => {
    return checkResponse(res);
  });
};

const profileEdit = (profileData) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(profileData),
  }).then((res) => {
    return checkResponse(res);
  });
};

const addCards = (cardData) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(cardData),
  }).then((res) => {
    return checkResponse(res);
  });
};

const avatarEdit = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  })
  .then((res) => {
    return checkResponse(res);
  });
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
    return Promise.reject(`Упс: ${res.status}`);
};

export {addCards, avatarEdit, profileEdit, getInitialCards, getProfileData, deleteCard, addLike, removeLike }