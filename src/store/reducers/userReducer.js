import { handleActions } from 'redux-actions';
import { loginUser, loginUserRequest, fetchUserActions } from '../actions/userActions';

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
      console.log('fetchAuthTokenActions.triggered');
      return { ...initialState, tokenRequested: true };
    },

    [fetchUserActions.succeeded](state, { payload }) {
      console.log('fetchAuthTokenActions.succeeded', payload);
      return { ...state, ...payload };
    },

    [fetchUserActions.failed]() {
      console.log('fetchAuthTokenActions.failed');
      return initialState;
    }
  },
  initialState
);

export default userReducer;
