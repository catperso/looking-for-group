import rootReducer from "../../reducers";
import { createStore } from "redux";
import formVisibleReducer from "../../reducers/form-visible-reducer";
import gameListReducer from "../../reducers/game-list-reducer";
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainGameList).toEqual(gameListReducer(undefined, {type: null}));
  });

  test('check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null}));
  });

  test('check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {type: c.TOGGLE_FORM};
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});