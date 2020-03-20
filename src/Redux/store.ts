import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';

const enhancers = compose(
  applyMiddleware(thunkMiddleware),
  process.env.NODE_ENV !== 'production'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : (f: any) => f
);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['']
  //   whitelist: ['']
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, enhancers);
export const persistor = persistStore(store);

export default () => {
  // create store and persistor per normal...

  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      // This fetch the new state of the above reducers.
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
    });
  }

  return { store, persistor };
};
