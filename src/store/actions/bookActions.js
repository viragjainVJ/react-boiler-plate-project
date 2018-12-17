import { createActions } from 'redux-actions';
import createFetchActions from './createFetchActions';

const { updateBookList } = createActions({}, 'UPDATE_BOOK_LIST');

const fetchBookActions = createFetchActions('BOOK', {
  request_payload: book => ({
    book
  })
});

export { fetchBookActions, updateBookList };
