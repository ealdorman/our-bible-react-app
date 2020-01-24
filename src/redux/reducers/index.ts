import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import BibleReducer, { BibleState } from './bible';

export interface IRootState {
  bible: BibleState;
  router: RouterState;
}

export const rootReducer = (history: History) =>
  combineReducers<IRootState>({
    bible: BibleReducer,
    router: connectRouter(history),
  });
