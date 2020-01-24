import { Store } from 'redux';

import { Creators } from '../actions';
import { IRootState } from '../reducers';

export default (store: Store<IRootState>) => {
  // @ts-ignore
  store.dispatch(Creators.getBooksThunk());
};
