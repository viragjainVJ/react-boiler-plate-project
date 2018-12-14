import HomePage from './HomePage';
import { connect } from 'react-redux';
import { fetchBookActions, editBook, updateBookList } from '../../../store/actions/bookActions';

const mapStateToProps = state => ({
  user: state.user,
  books: state.book
});

const mapDispatchToProps = {
  fetchBookActions: fetchBookActions.request,
  deleteBook: fetchBookActions.cancel,
  editBook: editBook,
  updateBookList: updateBookList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
