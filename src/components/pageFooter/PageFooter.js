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
    return <div style={{ height: '45px', backgroundColor: '#28AADF', position: 'fixed', left: '0', bottom: '0', width: '100%' }} />;
  }
}
export default PageFooter;
