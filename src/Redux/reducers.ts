import { combineReducers } from 'redux';
import { reducer as main } from '../containers/Home/ducks';

const appReducer = combineReducers({
  main
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
