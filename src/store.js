import cuid from 'cuid';

const bookmarks = [];

let adding = false;
let filter = null;
let error = null;


function addBookmark(bookmark) {
  console.log(bookmark);
  bookmark.id= cuid();
  bookmark.expanded=false;
  this.bookmarks.push(bookmark);
}

function findById(id) {
  let target =bookmarks.find((bookmark) => bookmark.id === id);
  return target;
}

function findAndUpdate(id, object){
  let target = findById(id);
  Object.assign(target, object);
}

function findAndDeleteStore(id) {
  this.bookmarks = this.bookmarks.filter(current => current.id !== id);
}

function setError(error) {
  this.error = error;
}

export default {
  bookmarks,
  adding,
  filter,
  error,
  addBookmark,
  findById,
  findAndUpdate,
  findAndDeleteStore,
  setError
};