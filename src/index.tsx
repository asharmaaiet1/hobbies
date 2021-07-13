import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import App from './components/App';
import { createStore } from 'redux';

import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
