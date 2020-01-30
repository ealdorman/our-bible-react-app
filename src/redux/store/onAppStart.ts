import { Store } from 'redux';

import { Creators } from '../actions';
import { IRootState } from '../reducers';

export default (store: Store<IRootState>) => {
  store.dispatch<any>(Creators.getBooksThunk());

  store.dispatch<any>(Creators.getBibleThunk());
};
