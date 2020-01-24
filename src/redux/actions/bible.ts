import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { IRootState } from '../reducers';
import { IBook } from '../reducers/bible';
import { bibleApi } from '../../APIs';

export enum BibleTypes {
  SET_LOADING_BOOKS = 'SET_LOADING_BOOKS',
  SET_BOOKS = 'SET_BOOKS',
}

export interface ISetLoadingBooksAction extends Action {
  type: BibleTypes.SET_LOADING_BOOKS;
  payload: {
    loadingBooks: boolean;
  };
}

export interface ISetBooksAction extends Action {
  type: BibleTypes.SET_BOOKS;
  payload: {
    books: IBook[];
  };
}

export const setLoadingBooks = (
  loadingBooks: boolean
): ISetLoadingBooksAction => ({
  type: BibleTypes.SET_LOADING_BOOKS,
  payload: {
    loadingBooks,
  },
});

export const setBooks = (books: IBook[]): ISetBooksAction => ({
  type: BibleTypes.SET_BOOKS,
  payload: {
    books,
  },
});

export const getBooksThunk = (): ThunkAction<
  void,
  IRootState,
  null,
  Action<string>
> => async dispatch => {
  dispatch(setLoadingBooks(true));

  const booksRes = await bibleApi('GET', '/books');

  if (!booksRes || !booksRes.books) {
    dispatch(setLoadingBooks(false));

    return;
  }

  dispatch(setBooks(booksRes.books as IBook[]));

  dispatch(setLoadingBooks(false));
};

export default {
  setLoadingBooks,
  setBooks,
  getBooksThunk,
};
