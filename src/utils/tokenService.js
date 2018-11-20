function setToken(token) {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
}

function getToken() {
  var token = localStorage.getItem('token');
  if (token) {
    var payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      token = null;
    }
  }
  return token;
}

function getUserFromToken() {
  var token = getToken();
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

function removeToken() {
  localStorage.removeItem('token');
}

export default {
  setToken,
  getToken,
  removeToken,
  getUserFromToken
};