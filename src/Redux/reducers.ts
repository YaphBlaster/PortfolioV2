import { combineReducers } from 'redux';
import { reducer as mode } from '../containers/Home/ducks';

const appReducer = combineReducers({
  mode
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
