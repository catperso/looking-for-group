import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('game list actions', () => {
  it('deleteGame should create DELETE_GAME action', () => {
    expect(actions.deleteGame(1)).toEqual({
      type: c.DELETE_GAME,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});