import React, { Component } from 'react';
import Header from './Header';
import Books from './Books';

class Home extends Component {
  render() {
    const { username, designation, company } = this.props.user;
    return (
      <div>
        <Header user={this.props.user} />
        <div style={{ width: '100%', height: '100vh', backgroundColor: 'white' }}>
          <div style={{ color: 'black', display: 'inline-block' }}>
            <Books />
          </div>
          <button style={{ position: 'relative', float: 'right', backgroundColor: 'red', color: 'white', borderRadius: '50%', height: '50px', width: '50px' }}>+</button>
        </div>
      </div>
    );
  }
}

export default Home;
