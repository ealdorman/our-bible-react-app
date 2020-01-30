import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Intent } from '@blueprintjs/core';

import { IRootState } from '../reducers';
import { IBook, IChapter, IVerse, IBible } from '../reducers/bible';
import { bibleApi } from '../../APIs';
import { IOptionData } from '../../components/Select';
import { AppToaster } from '../../components/AppToaster';

export enum BibleTypes {
  SET_LOADING_BIBLE = 'SET_LOADING_BIBLE',
  SET_BIBLE = 'SET_BIBLE',
  SET_LOADING_BOOKS = 'SET_LOADING_BOOKS',
  SET_BOOKS = 'SET_BOOKS',
  SET_SELECTED_BOOK = 'SET_SELECTED_BOOK',
  SET_LOADING_CHAPTERS = 'SET_LOADING_CHAPTERS',
  SET_CHAPTERS = 'SET_CHAPTERS',
  SET_SELECTED_CHAPTER = 'SET_SELECTED_CHAPTER',
  SET_LOADING_VERSES = 'SET_LOADING_VERSES',
  SET_VERSES = 'SET_VERSES',
  SET_SELECTED_VERSE = 'SET_SELECTED_VERSE',
  SET_PRESERVED = 'SET_PRESERVED',
}

export interface ISetLoadingBibleAction extends Action {
  type: BibleTypes.SET_LOADING_BIBLE;
  payload: {
    loadingBible: boolean;
  };
}

export interface ISetBibleAction extends Action {
  type: BibleTypes.SET_BIBLE;
  payload: {
    bible: IBible;
  };
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

export interface ISetSelectedBookAction extends Action {
  type: BibleTypes.SET_SELECTED_BOOK;
  payload: {
    selectedBook: IOptionData;
  };
}

export interface ISetLoadingChaptersAction extends Action {
  type: BibleTypes.SET_LOADING_CHAPTERS;
  payload: {
    loadingChapters: boolean;
  };
}

export interface ISetChaptersAction extends Action {
  type: BibleTypes.SET_CHAPTERS;
  payload: {
    chapters: IChapter[];
  };
}

export interface ISetSelecteChapterAction extends Action {
  type: BibleTypes.SET_SELECTED_CHAPTER;
  payload: {
    selectedChapter: IOptionData | undefined;
  };
}

export interface ISetLoadingVersesAction extends Action {
  type: BibleTypes.SET_LOADING_VERSES;
  payload: {
    loadingVerses: boolean;
  };
}

export interface ISetVersesAction extends Action {
  type: BibleTypes.SET_VERSES;
  payload: {
    verses: IVerse[];
  };
}

export interface ISetSelectedVerseAction extends Action {
  type: BibleTypes.SET_SELECTED_VERSE;
  payload: {
    selectedVerse: IOptionData | undefined;
  };
}

export interface ISetPreservedAction extends Action {
  type: BibleTypes.SET_PRESERVED;
  payload: {
    preserved: IOptionData[];
  };
}

export const setLoadingBible = (
  loadingBible: boolean
): ISetLoadingBibleAction => ({
  type: BibleTypes.SET_LOADING_BIBLE,
  payload: {
    loadingBible,
  },
});

export const setBible = (bible: IBible): ISetBibleAction => ({
  type: BibleTypes.SET_BIBLE,
  payload: {
    bible,
  },
});

export const getBibleThunk = (): ThunkAction<
  void,
  IRootState,
  null,
  Action<string>
> => async dispatch => {
  dispatch(setLoadingBible(true));

  const bibleRes = await bibleApi('GET', '/bible');

  if (!bibleRes || !bibleRes.bible) {
    AppToaster.show({
      message: 'We could not fetch the bible. Refreshing the page may help.',
      intent: Intent.DANGER,
    });
    dispatch(setLoadingBible(false));

    return;
  }

  dispatch(setBible(bibleRes.bible as IBible));

  dispatch(setLoadingBible(false));
};

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
    AppToaster.show({
      message: 'We could not fetch bible books. Refreshing the page may help.',
      intent: Intent.DANGER,
    });

    dispatch(setLoadingBooks(false));

    return;
  }

  dispatch(setBooks(booksRes.books as IBook[]));

  dispatch(setLoadingBooks(false));
};

export const setSelectedBook = (
  selectedBook: IOptionData
): ISetSelectedBookAction => ({
  type: BibleTypes.SET_SELECTED_BOOK,
  payload: {
    selectedBook,
  },
});

export const setLoadingChapters = (
  loadingChapters: boolean
): ISetLoadingChaptersAction => ({
  type: BibleTypes.SET_LOADING_CHAPTERS,
  payload: {
    loadingChapters,
  },
});

export const setChapters = (chapters: IChapter[]): ISetChaptersAction => ({
  type: BibleTypes.SET_CHAPTERS,
  payload: {
    chapters,
  },
});

export const getChaptersThunk = (): ThunkAction<
  void,
  IRootState,
  null,
  Action<string>
> => async (dispatch, getState) => {
  const { selectedBook } = getState().bible;

  if (!selectedBook || !selectedBook.value) {
    AppToaster.show({
      message: 'Select a book to get its chapters.',
      intent: Intent.WARNING,
    });
    return;
  }

  dispatch(setLoadingChapters(true));

  const chaptersRes = await bibleApi(
    'GET',
    `/chapters/${encodeURIComponent(selectedBook.value)}`
  );

  if (!chaptersRes || !chaptersRes.chapters) {
    AppToaster.show({
      message: 'We could not fetch chapters. Refreshing the page may help.',
      intent: Intent.DANGER,
    });

    dispatch(setLoadingChapters(false));

    return;
  }

  dispatch(setChapters(chaptersRes.chapters as IChapter[]));

  dispatch(setLoadingChapters(false));
};

export const setSelectedChapter = (
  selectedChapter: IOptionData | undefined
): ISetSelecteChapterAction => ({
  type: BibleTypes.SET_SELECTED_CHAPTER,
  payload: {
    selectedChapter,
  },
});

export const setLoadingVerses = (
  loadingVerses: boolean
): ISetLoadingVersesAction => ({
  type: BibleTypes.SET_LOADING_VERSES,
  payload: {
    loadingVerses,
  },
});

export const setVerses = (verses: IVerse[]): ISetVersesAction => ({
  type: BibleTypes.SET_VERSES,
  payload: {
    verses,
  },
});

export const getVersesThunk = (): ThunkAction<
  void,
  IRootState,
  null,
  Action<string>
> => async (dispatch, getState) => {
  const { selectedBook, selectedChapter } = getState().bible;

  if (!selectedBook || !selectedBook.value) {
    AppToaster.show({
      message: 'Select a book to get chapters.',
      intent: Intent.WARNING,
    });

    return;
  }

  if (!selectedChapter || !selectedChapter.value) {
    AppToaster.show({
      message: 'Select a chapter to get verses.',
      intent: Intent.WARNING,
    });

    return;
  }

  dispatch(setLoadingVerses(true));

  const versesRes = await bibleApi(
    'GET',
    `/verses/${encodeURIComponent(selectedBook.value)}/${selectedChapter.value}`
  );

  if (!versesRes || !versesRes.verses) {
    AppToaster.show({
      message: 'We could not fetch verses. Refreshing the page may help.',
      intent: Intent.DANGER,
    });

    dispatch(setLoadingVerses(false));

    return;
  }

  dispatch(setVerses(versesRes.verses as IVerse[]));

  dispatch(setLoadingVerses(false));
};

export const setSelectedVerse = (
  selectedVerse: IOptionData | undefined
): ISetSelectedVerseAction => ({
  type: BibleTypes.SET_SELECTED_VERSE,
  payload: {
    selectedVerse,
  },
});

export const setPreserved = (
  preserved: IOptionData[]
): ISetPreservedAction => ({
  type: BibleTypes.SET_PRESERVED,
  payload: {
    preserved,
  },
});

export default {
  setLoadingBible,
  setBible,
  getBibleThunk,
  setLoadingBooks,
  setBooks,
  getBooksThunk,
  setSelectedBook,
  setLoadingChapters,
  setChapters,
  getChaptersThunk,
  setSelectedChapter,
  setLoadingVerses,
  setVerses,
  getVersesThunk,
  setSelectedVerse,
  setPreserved,
};
