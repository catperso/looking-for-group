import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import formVisibleReducer from './form-visible-reducer';
import gameListReducer from './game-list-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainGameList: gameListReducer,
  firestore: firestoreReducer
});

export default rootReducer;