import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/store';
import { configureRouter } from './router/router';
import { configureSaga } from './store/sagas/saga';

import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

export const Root = children => {
  return <Provider store={store}>{children}</Provider>;
};

const renderer = page => {
  ReactDOM.render(Root(page), document.getElementById('root'));
};

configureSaga();
configureRouter(store, renderer);

registerServiceWorker();
