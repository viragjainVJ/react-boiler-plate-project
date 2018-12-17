import { handleActions } from 'redux-actions';
import { updateBookList, fetchBookActions } from '../actions/bookActions';
import { dummyData } from '../../util/dummyData';

const initialState = dummyData;

const bookReducer = handleActions(
  {
    [updateBookList](state, { payload }) {
      return state.map(book => {
        if (book.id === payload.id) {
          return {
            ...book,
            title: payload.updatedTitle,
            author: payload.updatedAuthor
          };
        } else return book;
      });
    },

    // Used to delete the book Entry
    [fetchBookActions.cancelled](state, { payload }) {
      return state.filter(book => book.id !== payload);
    },

    [fetchBookActions.triggered](state) {
      return [...state];
    },

    // Used to add the new entry to the store
    [fetchBookActions.succeeded](state, { payload }) {
      return [...state, { ...payload.book }];
    },

    [fetchBookActions.failed](state) {
      return state;
    }
  },
  initialState
);

export default bookReducer;
