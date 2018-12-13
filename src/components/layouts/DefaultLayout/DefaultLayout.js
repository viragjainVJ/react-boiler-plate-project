/**
 * Created by bharatm on 4/21/18.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

class DefaultLayout extends Component {
  static propTypes = {
    header: PropTypes.element.isRequired,
    content: PropTypes.element.isRequired,
    footer: PropTypes.element.isRequired
  };

  static defaultProps = {};

  render() {
    return (
      <div className="app">
        {this.props.header}
        <Container>{this.props.content}</Container>
        <footer className="w-100 footer">{this.props.footer}</footer>
      </div>
    );
  }
}

export default DefaultLayout;
