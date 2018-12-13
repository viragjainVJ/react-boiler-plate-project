import HomePage from './HomePage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(HomePage);
