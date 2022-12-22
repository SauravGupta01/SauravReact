import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from '../reducers';

let store;

// import blogReducer from "./reducers/blogReducer";
// import { combineReducers } from "redux";
// import { mainReducer } from "./reducers/index";
// // import logger from "redux-logger";
// // import reduxThunk from "redux-thunk"
// import { createStore,applyMiddleware } from "redux";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};
// const mainReducer=combineReducers({
//     blog:blogReducer
// })

const peristedState = loadState();

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const store = createStore(mainReducer,,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export function configureStore() {
  store = createStore(reducer, peristedState, applyMiddleware(thunk, logger));
  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
}
