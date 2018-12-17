import React from 'react';
import Home from '../../../components/home/Home';

const HomePage = ({ user, books, deleteBook, updateBookList, fetchBookActions }) => (
  <div>
    <Home user={user} books={books} deleteBook={deleteBook} fetchBookActions={fetchBookActions} updateBookList={updateBookList} />
  </div>
);

export default HomePage;
