import React, { Component } from 'react';
import BookList from './BookList';

class Books extends Component {
  render() {
    return (
      <div>
        <h1>Books List:</h1>
        {this.props.books.length > 0 &&
          this.props.books.map(book => (
            <div key={book.id}>
              <BookList key={book.id} book={book} deleteBook={this.props.deleteBook} updateBookList={this.props.updateBookList} />
            </div>
          ))}
      </div>
    );
  }
}

export default Books;
