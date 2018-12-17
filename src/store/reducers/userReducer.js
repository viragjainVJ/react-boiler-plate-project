import { handleActions } from 'redux-actions';
import { loginUser, fetchUserActions } from '../actions/userActions';

const initialState = {
  username: null,
  password: null
};

const userReducer = handleActions(
  {
    [loginUser](state) {
      return { ...state };
    },

    [fetchUserActions.triggered]() {
      return { ...initialState, tokenRequested: true };
    },

    [fetchUserActions.succeeded](state, { payload }) {
      return { ...state, ...payload };
    },

    [fetchUserActions.failed]() {
      return initialState;
    }
  },
  initialState
);

export default userReducer;
