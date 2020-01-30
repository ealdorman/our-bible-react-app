import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import BibleReducer, { BibleState } from './bible';
import OverlaysReducer, { OverlayState } from './overlays';

export interface IRootState {
  bible: BibleState;
  overlays: OverlayState;
  router: RouterState;
}

export const rootReducer = (history: History) =>
  combineReducers<IRootState>({
    bible: BibleReducer,
    overlays: OverlaysReducer,
    router: connectRouter(history),
  });
