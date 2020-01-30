import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Web3 from 'web3';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux/store';

const { store, history } = configureStore();

declare global {
  interface Window {
    web3?: Web3;
    ethereum?: {
      enable: () => Promise<string[]>;
      selectedAddress?: string;
    };
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
