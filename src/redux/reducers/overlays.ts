import { State, createReducer } from './helpers';
import { setShowAbout, OverlayTypes } from '../actions/overlays';

export interface IOverlayState extends State {
  showAbout: boolean;
}

export type OverlayState = Readonly<IOverlayState>;

const initialState: OverlayState = {
  showAbout: false,
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

const handlers = {
  [OverlayTypes.SET_SHOW_ABOUT]: setShowAboutHndlr,
};

export default createReducer(initialState, handlers);
