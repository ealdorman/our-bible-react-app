import { State, createReducer } from './helpers';
import { setShowAbout, OverlayTypes, setShowHowThisWorks } from '../actions/overlays';

export interface IOverlayState extends State {
  showAbout: boolean;
  showHowThisWorks: boolean;
}

export type OverlayState = Readonly<IOverlayState>;

const initialState: OverlayState = {
  showAbout: false,
  showHowThisWorks: false
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

const handlers = {
  [OverlayTypes.SET_SHOW_ABOUT]: setShowAboutHndlr,
  [OverlayTypes.SET_SHOW_HOW_THIS_WORKS]: setShowHowThisWorksHndlr
};

export default createReducer(initialState, handlers);
