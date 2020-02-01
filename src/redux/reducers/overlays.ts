import { State, createReducer } from './helpers';
import { setShowAbout, OverlayTypes, setShowHowThisWorks, setShowDidYouKnow } from '../actions/overlays';

export interface IOverlayState extends State {
  showAbout: boolean;
  showHowThisWorks: boolean;
  showDidYouKnow: boolean;
}

export type OverlayState = Readonly<IOverlayState>;

const initialState: OverlayState = {
  showAbout: false,
  showHowThisWorks: false,
  showDidYouKnow: false
};

const setShowAboutHndlr = (
  state = initialState,
  action: ReturnType<typeof setShowAbout>
): OverlayState => {
  return {
    ...state,
    showAbout: action.payload.showAbout,
  };
};

const setShowHowThisWorksHndlr = (
  state = initialState,
  action: ReturnType<typeof setShowHowThisWorks>
): OverlayState => {
  return {
    ...state,
    showHowThisWorks: action.payload.showHowThisWorks,
  };
};

const setShowDidYouKnowHndlr = (
  state = initialState,
  action: ReturnType<typeof setShowDidYouKnow>
): OverlayState => {
  return {
    ...state,
    showDidYouKnow: action.payload.showDidYouKnow,
  };
};

const handlers = {
  [OverlayTypes.SET_SHOW_ABOUT]: setShowAboutHndlr,
  [OverlayTypes.SET_SHOW_HOW_THIS_WORKS]: setShowHowThisWorksHndlr,
  [OverlayTypes.SET_SHOW_DID_YOU_KNOW]: setShowDidYouKnowHndlr
};

export default createReducer(initialState, handlers);
