import React from 'react';
import Game from './Game';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function GameList(props){
  useFirestoreConnect([ { collection: 'games' } ]);
  const games = useSelector(state => state.firestore.ordered.games);

  if (isEmpty(games)) {
    return(
      <React.Fragment>
        <h3>No games to display!</h3>
      </React.Fragment>
    );
  }
  if (isLoaded(games)) {
    return(
      <React.Fragment>
        {games.map((game) => {
          return <Game 
            whenGameClicked = {props.onGameSelection}
            gameName = {game.gameName}
            gameHost = {game.gameHost}
            gameTags = {game.gameTags}
            postTime = {game.postTime.toDate().toDateString()}
            id = {game.id}
            key = {game.id}
          />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Games are loading...</h3>
      </React.Fragment>
    );
  }
}

GameList.propTypes = {
  onGameSelection: PropTypes.func
}

export default GameList;