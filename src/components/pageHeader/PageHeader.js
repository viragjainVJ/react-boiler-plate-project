/**
 * Created by bharatm on 4/21/18.
 */

import React, { Component } from 'react';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return <div style={{ height: '45px', backgroundColor: '#28AADF', textAlign: 'center', fontSize: '2em' }}>Talentica Software</div>;
  }
}

export default PageHeader;
