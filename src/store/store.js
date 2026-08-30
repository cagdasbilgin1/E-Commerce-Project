import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import globalReducer from './reducers/globalReducer';

const rootReducer = combineReducers({
  global: globalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
