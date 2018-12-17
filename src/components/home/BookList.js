import React, { Component } from 'react';
import Add from './Add';

class BookList extends Component {
  onDelete = () => {
    this.props.deleteBook(this.props.book.id);
  };

  render() {
    const { book, updateBookList } = this.props;
    const { title, author } = book;

    return (
      <div>
        <li>
          <span style={{ paddingRight: '10px' }}>
            {title}, {author}
          </span>
          <div style={{ display: 'inline-block' }}>
            <Add modalTitle={'Edit'} book={book} updateBookList={updateBookList} />
          </div>
          <button style={{ marginLeft: '5px' }} onClick={this.onDelete}>
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default BookList;
