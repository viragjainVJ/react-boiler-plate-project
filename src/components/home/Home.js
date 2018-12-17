import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';
import Editable from './Editable';

class Home extends Component {
  render() {
    const { user, fetchBookActions, books, deleteBook, updateBookList } = this.props;
    return (
      <div>
        <Header user={user} />
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
          <table style={{ width: '100%', color: 'black' }}>
            <tbody>
              <tr>
                <td>
                  <Books books={books} deleteBook={deleteBook} updateBookList={updateBookList} />
                </td>
                <td style={{ float: 'right', padding: '15px' }}>
                  <Editable modalTitle={'Add'} fetchBookActions={fetchBookActions} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;
