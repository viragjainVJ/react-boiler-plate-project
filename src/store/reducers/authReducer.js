import { handleActions } from 'redux-actions';
import { logoutUser, fetchAuthTokenActions } from '../actions/authActions';

const initialState = {
  username: null,
  authToken: null,
  tokenRequested: false
};

const authReducer = handleActions(
  {
    [logoutUser]() {
      return initialState;
    },

    [fetchAuthTokenActions.triggered]() {
      return { ...initialState, tokenRequested: true };
    },

    [fetchAuthTokenActions.succeeded](state, { payload }) {
      const { authToken, redirectToHome } = payload;

      // if (authToken === state.authToken) {
      //   return state;
      // }

      return { ...payload, tokenRequested: false };
    },

    [fetchAuthTokenActions.failed]() {
      return initialState;
    }
  },
  initialState
);

export default authReducer;
