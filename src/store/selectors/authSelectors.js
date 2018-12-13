import { createSelector } from 'reselect';

const authSelector = state => state.auth;

const authenticatedSelector = createSelector(
  authSelector,
  auth => auth.authToken !== null
);

export { authSelector, authenticatedSelector };
