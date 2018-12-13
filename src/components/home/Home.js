import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { username, designation, company } = this.props.user;
    return (
      <div>
        {username ? <h1>Welcome {username} !!!</h1> : ''}
        <div>{designation}</div>
        <div>{company}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(Home);
