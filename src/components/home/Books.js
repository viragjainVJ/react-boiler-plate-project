import React, { Component } from 'react';

class Books extends Component {
  render() {
    return (
      <div>
        <h1>Books List:</h1>
        <ul>
          <li>
            Book1
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Books;
