import { createActions } from 'redux-actions';
import createFetchActions from './createFetchActions';

const { editBook, updateBookList } = createActions({}, 'ADD_BOOK', 'EDIT_BOOK', 'UPDATE_BOOK_LIST');

const fetchBookActions = createFetchActions('BOOK', {
  request_payload: book => ({
    book
  })
});

export { fetchBookActions, editBook, updateBookList };
