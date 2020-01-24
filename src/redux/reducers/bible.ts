import { State, createReducer } from './helpers';
import { setLoadingBooks, setBooks, BibleTypes } from '../actions/bible';

export interface IBook {
  name: string;
  percentageAdded: number;
}

export interface IBible extends State {
  books?: IBook[];
  loadingBooks: boolean;
}

export type BibleState = Readonly<IBible>;

const initialState: BibleState = {
  books: [],
  loadingBooks: true,
};

const setLoadingBooksHndlr = (
  state = initialState,
  action: ReturnType<typeof setLoadingBooks>
): BibleState => {
  return {
    ...state,
    loadingBooks: action.payload.loadingBooks,
  };
};

const setBooksHndlr = (
  state = initialState,
  action: ReturnType<typeof setBooks>
): BibleState => {
  return {
    ...state,
    books: action.payload.books,
  };
};

const handlers = {
  [BibleTypes.SET_BOOKS]: setBooksHndlr,
  [BibleTypes.SET_LOADING_BOOKS]: setLoadingBooksHndlr,
};

export default createReducer(initialState, handlers);
