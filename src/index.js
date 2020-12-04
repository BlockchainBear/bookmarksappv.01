import $ from 'jquery';
import 'normalize.css';
import './styles.css';
import api from './api';
import bookmarkList from './bookmark-list';

function main() {
  bookmarkList.bindEventListeners();
  api.getBookmarks()
    .then((bookmarks) => {
      bookmarkList.render();
    });
}

$(main);