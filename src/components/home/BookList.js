import React, { Component } from 'react';

class BookList extends Component {
  onDelete = () => {
    this.props.deleteBook(this.props.book.id);
  };

  onEdit = () => {
    this.props.editBook(this.props.book.id);
  };

  render() {
    const { title, author } = this.props.book;
    return (
      <div>
        <li>
          <span style={{ paddingRight: '10px' }}>
            {title}, {author}{' '}
          </span>
          <button onClick={this.onEdit}>Edit</button>
          <button onClick={this.onDelete}>Delete</button>
        </li>
      </div>
    );
  }
}

export default BookList;
