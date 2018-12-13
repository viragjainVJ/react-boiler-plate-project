import { connect } from 'react-redux';
import PageHeader from './PageHeader';
import { logoutUser } from '../../store/redux/actions/authActions';

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});
export default connect(
  null,
  mapDispatchToProps
)(PageHeader);
