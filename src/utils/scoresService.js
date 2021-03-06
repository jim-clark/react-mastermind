import tokenService from './tokenService';

const BASE_URL = '/api/scores/';

function index() {
  return fetch(BASE_URL, getAuthRequestOptions('GET'))
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Authorization Required');
  })
  .then(scores => scores);
}

function create(score) {
  var options = getAuthRequestOptions('POST');
  options.headers.append('Content-type', 'application/json');
  options.body = JSON.stringify(score)
  return fetch(BASE_URL, options)
    .then(res => {
      if (res.ok) return res.json();
      throw new Error('Authorization Required');
    })
    .then(score => score);
}

/*----- Helper Functions -----*/

function getAuthRequestOptions(method) {
  return {
    method: method,
    headers: new Headers({'Authorization': 'Bearer ' + tokenService.getToken()})
  };
}

export default {
  index,
  create
};
