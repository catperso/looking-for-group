import gameListReducer from '../../reducers/game-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('gameListReducer', () => {

  let action;

  const currentState = {
    1: {gameName: 'Curse of Strahd',
        gameHost: 'Sleve McDichael',
        gameDescription: 'Classic playthrough of this brutal epic',
        id: 1 },
    2: {gameName: 'Into the Feywild',
        gameHost: 'Bobson Dugnutt',
        gameDescripotion: 'Explore the fey lands in my homebrew campaign',
        id: 2 }
  }


  test('should return default state if there is no action type passed into the reducer', () => {
    expect(gameListReducer({}, {type: null})).toEqual({});
  });

  test('should successfully delete a game', () => {
    action = { type: c.DELETE_GAME, id: 1};
    expect(gameListReducer(currentState, action)).toEqual({
      2: {gameName: 'Into the Feywild',
      gameHost: 'Bobson Dugnutt',
      gameDescripotion: 'Explore the fey lands in my homebrew campaign',
      id: 2 }
    });
  });
});