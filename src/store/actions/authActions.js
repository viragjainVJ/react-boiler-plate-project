import { createActions } from 'redux-actions';
import createFetchActions from './createFetchActions';

const { logoutUser, validateAuth, scheduleValidateAuth, cancelValidateAuth } = createActions({}, 'LOGOUT_USER', 'VALIDATE_AUTH', 'SCHEDULE_VALIDATE_AUTH', 'CANCEL_VALIDATE_AUTH');

const fetchAuthTokenActions = createFetchActions('AUTH_TOKEN', {
  request_payload: (username, password) => ({
    username,
    password
  })
});

export { fetchAuthTokenActions, logoutUser, validateAuth, scheduleValidateAuth, cancelValidateAuth };
