import React, { Component } from 'react';
import ModalPanel from '../modal/Modal';

export default class Header extends Component {
  state = {
    query: ''
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <input placeholder="Search for..." ref={input => (this.search = input)} onChange={this.handleInputChange} style={{ width: '80%' }} />
            <div style={{ display: 'inline', float: 'right' }}>
              <ModalPanel buttonLabel={this.props.user.username} user={this.props.user} />
            </div>
          </div>

          <p>{this.state.query}</p>
        </form>
      </div>
    );
  }
}
