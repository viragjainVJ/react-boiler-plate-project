import LoginPage from './LoginPage';
import { authSelector } from '../../../store/selectors/authSelectors';
import { connect } from 'react-redux';
import { validateAuth, fetchAuthTokenActions } from '../../../store/actions/authActions';
import { fetchUserActions, loginUser } from '../../../store/actions/userActions';

const mapStateToProps = state => ({
  authToken: authSelector(state).authToken,
  user: state.user
});
const mapDispatchToProps = {
  validateAuth: validateAuth,
  fetchAuthTokenActionsRequest: fetchAuthTokenActions.request,
  fetchUserActions: fetchUserActions.request,
  loginUser: loginUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
