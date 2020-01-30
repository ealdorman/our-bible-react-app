import { Action } from 'redux';

export enum OverlayTypes {
  SET_SHOW_ABOUT = 'SET_SHOW_ABOUT',
}

export interface ISetShowAboutAction extends Action {
  type: OverlayTypes.SET_SHOW_ABOUT;
  payload: {
    showAbout: boolean;
  };
}

export const setShowAbout = (showAbout: boolean): ISetShowAboutAction => ({
  type: OverlayTypes.SET_SHOW_ABOUT,
  payload: {
    showAbout,
  },
});

export default {
  setShowAbout,
};
