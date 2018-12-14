import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import PostBook from './PostBook';

class Home extends Component {
  render() {
    const { user, fetchBookActions, books, deleteBook, editBook, updateBookList } = this.props;
    return (
      <div>
        <Header user={user} />
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
          <PostBook fetchBookActions={fetchBookActions} />
          <div style={{ color: 'black', display: 'inline-block' }}>
            <Books books={books} deleteBook={deleteBook} editBook={editBook} updateBookList={updateBookList} />{' '}
          </div>
          <button style={{ position: 'relative', float: 'right', backgroundColor: 'red', color: 'white', borderRadius: '50%', height: '50px', width: '50px' }}>+</button>
        </div>
      </div>
    );
  }
}

export default Home;
