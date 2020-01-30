import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { configureStore } from './redux/store';

const { store, history } = configureStore();

test('renders', () => {
  render(<Provider store={store}>
    <App history={history} />
  </Provider>);
});
