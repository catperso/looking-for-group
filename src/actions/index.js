import * as c from './ActionTypes';

export const deleteGame = id => ({
  type: c.DELETE_GAME,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});