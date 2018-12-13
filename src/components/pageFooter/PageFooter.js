import React, { Component } from 'react';
import intl from 'react-intl-universal';

class PageFooter extends Component {
  getYear() {
    return new Date().getFullYear();
  }
  render() {
    const defaultFooterText = intl.get('app.footer', {
      year: this.getYear()
    });
    return <div />;
  }
}
export default PageFooter;
