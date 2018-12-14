import { handleActions } from 'redux-actions';
import { editBook, updateBookList, fetchBookActions } from '../actions/bookActions';
import { dummyData } from '../../util/dummyData';

const initialState = dummyData;

const bookReducer = handleActions(
  {
    [editBook](state, { payload }) {
      return state.map(book => (book.id === payload ? { ...book, editing: !book.editing } : book));
    },

    [updateBookList](state, { payload }) {
      console.log('State and Payload', state, payload);
      return state.map(book => {
        if (book.id === payload.id) {
          return {
            ...book,
            title: payload.updatedTitle,
            author: payload.updatedAuthor,
            editing: !book.editing
          };
        } else return book;
      });
    },

    [fetchBookActions.cancelled](state, { payload }) {
      console.log('deleteBook', state, payload);
      return state.filter(book => book.id !== payload);
    },

    [fetchBookActions.triggered](state) {
      console.log('fetchBookActions.triggered', state);
      return [...state];
    },

    [fetchBookActions.succeeded](state, { payload }) {
      //console.log('fetchBookActions.succeeded', payload.data);
      return [...state, { ...payload.book }];
    },

    [fetchBookActions.failed](state) {
      console.log('fetchBookActions.failed');
      return state;
    }
  },
  initialState
);

export default bookReducer;
