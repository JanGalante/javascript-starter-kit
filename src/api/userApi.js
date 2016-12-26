import 'whatwg-fetch'; // import polyfill for browser not supporting fetch

//This centralized API Proxy: abstracts away the HTTP API
//This file is a little bit like the repository pattern, but in javascript


// Only expose methods with export in front. All the others are "private""
export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
