import { MainState, StoreState } from 'models/reduxState';

//ACTIONS
const CHANGE_VALUE = 'CHANGE_VALUE';
const SET_HAS_VISITED = 'SET_HAS_VISITED';

const initialState: MainState = {
  value: 0,
  hasVisited: false
};

// Reducer input === current state
// Reducer output === new state

//REDUCER
export function reducer(state = initialState, action: ModeActionTypes) {
  console.log('action', action);

  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        value: action.payload
      };
    }
    case SET_HAS_VISITED: {
      return {
        ...state,
        hasVisited: action.payload || true
      };
    }
    default:
      return state;
  }
}

//SELECTORS
export const hasVisitedSelector = (state: StoreState): boolean =>
  state.main.hasVisited;

//INTERFACES
interface SetMode {
  type: typeof CHANGE_VALUE;
  payload: string;
}

interface SetHasVisited {
  type: typeof SET_HAS_VISITED;
  payload: boolean | undefined;
}

// ACTION TYPES
export type ModeActionTypes = SetMode | SetHasVisited;

//ACTION CREATORS
export const changeValue = (payload: string): ModeActionTypes => {
  return {
    type: CHANGE_VALUE,
    payload
  };
};

export const setHasVisited = (
  payload: boolean | undefined
): ModeActionTypes => {
  return {
    type: SET_HAS_VISITED,
    payload
  };
};
