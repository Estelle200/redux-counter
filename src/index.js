import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react';
import Application from './Application';
import './index.scss';
import { Store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
