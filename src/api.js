import { data } from "jquery";

const baseURL = 'https://thinkful-list-api.herokuapp.com/alyssa/bookmarks';


function getBookmarks() {
  return bookmarkApiFetch(`${baseURL}`);
}

function postBookmark(newBM) {
  return bookmarkApiFetch(`${baseURL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: newBM
  });
}

function deleteBookmark(id) {
  return bookmarkApiFetch(`${baseURL}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
}

function bookmarkApiFetch(...args) {
  let error;
  return fetch(...args)
    .then((response) => {
      if (!response.ok) {
        error = { code: response.status };
        if (!response.headers.get('Content-Type').includes('json')) {
          error.message = response.statusText;
          return Promise.reject(error);
        }
      }

      return response.json();
    })
    .then((data) => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      return data;
    });
}

export default {
  getBookmarks,
  postBookmark,
  deleteBookmark
};