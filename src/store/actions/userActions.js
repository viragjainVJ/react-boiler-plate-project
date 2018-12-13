import { createActions } from 'redux-actions';
import createFetchActions from './createFetchActions';

const { loginUser } = createActions({}, 'LOGIN_USER');

const fetchUserActions = createFetchActions('LOGIN', {
  request_payload: (username, password) => ({
    username,
    password
  })
});

export { fetchUserActions, loginUser };
