import React from 'react';
import Home from '../../../components/home/Home';

const HomePage = ({ user, books, deleteBook, editBook, updateBookList, fetchBookActions }) => (
  <div>
    <Home user={user} books={books} deleteBook={deleteBook} fetchBookActions={fetchBookActions} editBook={editBook} updateBookList={updateBookList} />
  </div>
);

export default HomePage;
