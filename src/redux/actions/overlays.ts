import { Action } from 'redux';

export enum OverlayTypes {
  SET_SHOW_ABOUT = 'SET_SHOW_ABOUT',
  SET_SHOW_HOW_THIS_WORKS = 'SET_SHOW_HOW_THIS_WORKS'
}

export interface ISetShowAboutAction extends Action {
  type: OverlayTypes.SET_SHOW_ABOUT;
  payload: {
    showAbout: boolean;
  };
}

export interface ISetShowHowThisWorksAction extends Action {
  type: OverlayTypes.SET_SHOW_HOW_THIS_WORKS;
  payload: {
    showHowThisWorks: boolean;
  };
}

export const setShowAbout = (showAbout: boolean): ISetShowAboutAction => ({
  type: OverlayTypes.SET_SHOW_ABOUT,
  payload: {
    showAbout,
  },
});

export const setShowHowThisWorks = (showHowThisWorks: boolean): ISetShowHowThisWorksAction => ({
  type: OverlayTypes.SET_SHOW_HOW_THIS_WORKS,
  payload: {
    showHowThisWorks,
  },
});

export default {
  setShowAbout,
  setShowHowThisWorks
};
