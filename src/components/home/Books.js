import React, { Component } from 'react';
import BookList from './BookList';
import Edit from './Edit';

class Books extends Component {
  render() {
    return (
      <div>
        <h1>Books List:</h1>
        {this.props.books.length > 0 &&
          this.props.books.map(book => (
            <div key={book.id}>
              {book.editing ? (
                <Edit key={book.id} book={book} updateBookList={this.props.updateBookList} />
              ) : (
                <BookList key={book.id} book={book} deleteBook={this.props.deleteBook} editBook={this.props.editBook} />
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default Books;
