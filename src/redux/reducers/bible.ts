import { State, createReducer } from './helpers';
import {
  setLoadingBible,
  setBible,
  setLoadingBooks,
  setBooks,
  BibleTypes,
  setSelectedBook,
  setLoadingChapters,
  setChapters,
  setSelectedChapter,
  setLoadingVerses,
  setVerses,
  setSelectedVerse,
  setPreserved,
} from '../actions/bible';
import { IOptionData } from '../../components/Select';

export interface IBible {
  name: string;
  percentageAdded: number;
}

export interface IBook {
  name: string;
  percentageAdded: number;
}

export interface IChapter {
  name: string;
  percentageAdded: number;
}

export interface IVerse {
  name: string;
  added: boolean;
  text: string;
}

export interface IBibleState extends State {
  loadingBible: boolean;
  bible?: IBible;
  books?: IBook[];
  loadingBooks: boolean;
  selectedBook?: IOptionData;
  loadingChapters: boolean;
  chapters?: IChapter[];
  selectedChapter?: IOptionData;
  loadingVerses: boolean;
  verses?: IVerse[];
  selectedVerse?: IOptionData;
  preserved: IOptionData[];
}

export type BibleState = Readonly<IBibleState>;

const initialState: BibleState = {
  loadingBible: true,
  books: [],
  loadingBooks: true,
  loadingChapters: false,
  chapters: [],
  loadingVerses: false,
  verses: [],
  preserved: [],
};

const setLoadingBibleHndlr = (
  state = initialState,
  action: ReturnType<typeof setLoadingBible>
): BibleState => {
  return {
    ...state,
    loadingBible: action.payload.loadingBible,
  };
};

const setBibleHndlr = (
  state = initialState,
  action: ReturnType<typeof setBible>
): BibleState => {
  return {
    ...state,
    bible: action.payload.bible,
  };
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

const setSelectedBookHndlr = (
  state = initialState,
  action: ReturnType<typeof setSelectedBook>
): BibleState => {
  return {
    ...state,
    selectedBook: action.payload.selectedBook,
  };
};

const setLoadingChaptersHndlr = (
  state = initialState,
  action: ReturnType<typeof setLoadingChapters>
): BibleState => {
  return {
    ...state,
    loadingChapters: action.payload.loadingChapters,
  };
};

const setChaptersHndlr = (
  state = initialState,
  action: ReturnType<typeof setChapters>
): BibleState => {
  return {
    ...state,
    chapters: action.payload.chapters,
  };
};

const setSelectedChapterHndlr = (
  state = initialState,
  action: ReturnType<typeof setSelectedChapter>
): BibleState => {
  return {
    ...state,
    selectedChapter: action.payload.selectedChapter,
  };
};

const setLoadingVersesHndlr = (
  state = initialState,
  action: ReturnType<typeof setLoadingVerses>
): BibleState => {
  return {
    ...state,
    loadingVerses: action.payload.loadingVerses,
  };
};

const setVersesHndlr = (
  state = initialState,
  action: ReturnType<typeof setVerses>
): BibleState => {
  return {
    ...state,
    verses: action.payload.verses,
  };
};

const setSelectedVerseHndlr = (
  state = initialState,
  action: ReturnType<typeof setSelectedVerse>
): BibleState => {
  return {
    ...state,
    selectedVerse: action.payload.selectedVerse,
  };
};

const setPreservedHndlr = (
  state = initialState,
  action: ReturnType<typeof setPreserved>
): BibleState => {
  return {
    ...state,
    preserved: action.payload.preserved,
  };
};

const handlers = {
  [BibleTypes.SET_LOADING_BIBLE]: setLoadingBibleHndlr,
  [BibleTypes.SET_BIBLE]: setBibleHndlr,
  [BibleTypes.SET_BOOKS]: setBooksHndlr,
  [BibleTypes.SET_LOADING_BOOKS]: setLoadingBooksHndlr,
  [BibleTypes.SET_SELECTED_BOOK]: setSelectedBookHndlr,
  [BibleTypes.SET_LOADING_CHAPTERS]: setLoadingChaptersHndlr,
  [BibleTypes.SET_CHAPTERS]: setChaptersHndlr,
  [BibleTypes.SET_SELECTED_CHAPTER]: setSelectedChapterHndlr,
  [BibleTypes.SET_LOADING_VERSES]: setLoadingVersesHndlr,
  [BibleTypes.SET_VERSES]: setVersesHndlr,
  [BibleTypes.SET_SELECTED_VERSE]: setSelectedVerseHndlr,
  [BibleTypes.SET_PRESERVED]: setPreservedHndlr,
};

export default createReducer(initialState, handlers);
