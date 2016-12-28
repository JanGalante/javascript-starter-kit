import 'whatwg-fetch'; // import polyfill for browser not supporting fetch
import getBaseUrl from './baseUrl';

//This centralized API Proxy: abstracts away the HTTP API
//This file is a little bit like the repository pattern, but in javascript


// Only expose methods with export in front. All the others are "private""
export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

const baseUrl = getBaseUrl();

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

// Can't call func delete since reserved word.
function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
