import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';
import PageFooter from '../pageFooter/PageFooter';
import PageHeader from '../pageHeader/PageHeader';

class App extends Component {
  static propTypes = {};

  render() {
    return <DefaultLayout header={<PageHeader context={this.props.context} />} content={this.props.children} footer={<PageFooter />} />;
  }
}

export default App;
