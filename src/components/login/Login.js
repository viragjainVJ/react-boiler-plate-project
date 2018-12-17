import React, { Component } from 'react';
import intl from 'react-intl-universal';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      submitted: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    {
      console.log('props');
    }
    this.setState({ submitted: true });
    if (this.state.username) {
      //Action called to make an API call
      this.props.fetchUserActions(this.state.username, 'abcd');
      //Action called to redirect user after succesful login
      this.props.loginUser();
    }
  };

  renderButton() {
    if (!this.props.authToken) {
      return <button>Log In</button>;
    } else {
      return <button>Log Out</button>;
    }
  }

  componentDidUpdate() {
    this.renderButton();
  }

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.state.submitted && !this.state.username && <div style={{ color: 'red' }}>Username is required</div>}
          <label>{intl.get('LoginForm.username')}:</label>
          <input type="text" value={this.state.username} onChange={this.handleChange} />

          {this.renderButton()}
        </form>
      </div>
    );
  }
}

export default Login;
