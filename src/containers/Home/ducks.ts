//ACTIONS
const CHANGE_VALUE = 'CHANGE_VALUE';

const initialState = {
  value: 0
};

// Reducer input === current state
// Reducer output === new state

//REDUCER
export function reducer(state = initialState, action: ModeActionTypes) {
  switch (action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        value: action.payload
      };
    }
    default:
      return state;
  }
}

//INTERFACE
interface SetMode {
  type: typeof CHANGE_VALUE;
  payload: string;
}

// ACTION TYPES
export type ModeActionTypes = SetMode;

//ACTION CREATORS
export const changeValue = (payload: string): ModeActionTypes => {
  return {
    type: CHANGE_VALUE,
    payload
  };
};
