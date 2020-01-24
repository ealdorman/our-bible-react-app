import { Store, createStore, Middleware, applyMiddleware } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { IRootState, rootReducer } from '../reducers';
import onAppStart from './onAppStart';

interface IConfiguredStore {
  store: Store<IRootState>;
  history: typeof history;
}

const history = createHashHistory();

export const configureStore = (): IConfiguredStore => {
  const middleware: Middleware[] = [];

  middleware.push(routerMiddleware(history));
  middleware.push(thunk);

  const store = createStore(
    rootReducer(history),
    applyMiddleware(...middleware)
  );

  onAppStart(store);

  return { store, history };
};
