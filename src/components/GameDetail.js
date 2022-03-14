import React from "react";
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { arrayUnion, arrayRemove } from 'firebase/firestore';

function GameDetail(props){
  const firestore = useFirestore();
  const { game, onClickingDelete } = props;
  let addPlayerStyle = null;
  let removePlayerStyle = {display: 'none'};
  let maxPlayersReached = null;
  let maxPlayerMessage = null;

  if (game.gamePlayers.length === parseInt(game.gameMaxPlayers)) {
    maxPlayersReached = true;
    maxPlayerMessage = 'Maximum players reached'
  } else {
    maxPlayersReached = false;
  }

  if ((props.currentUser === game.gameHost) || game.gamePlayers.includes(props.currentUser) || (props.currentUser === null)) {
    addPlayerStyle = {display: 'none'};
  } else {
    addPlayerStyle = {display: 'inline'};
  }

  if (game.gamePlayers.includes(props.currentUser)) removePlayerStyle = {display: 'inline'};

  function addPlayerToGame(player) {
    const propertiesToUpdate = {
      gamePlayers: arrayUnion(player)
    }
    return firestore.update({collection: 'games', doc: game.id }, propertiesToUpdate).then(props.onChangingPlayers(game.id));
  }

  function removePlayerFromGame(player) {
    const propertiesToUpdate = {
      gamePlayers: arrayRemove(player)
    }
    return firestore.update({collection: 'games', doc: game.id }, propertiesToUpdate).then(props.onChangingPlayers(game.id));
  }



  return (
    <React.Fragment>
      <button onClick={ props.onClickingEdit } className="btn btn-info" style={{display: props.currentUser === game.gameHost ? 'inline' : 'none' }}>Update Game</button>
      <button onClick={()=> onClickingDelete(game.id) } className="btn btn-danger" style={{display: props.currentUser === game.gameHost ? 'inline' : 'none' }}>Delete Game</button>
      <div className="row">
        <div className="col-8">
          <h1 className="gameDetailTitle">{game.gameName}</h1>
          <h4>Dungeon Master: <em>{game.gameHost}</em></h4>
          <h4>Session Date: {game.gameTime}</h4>
          <h4>This session is taking place at: {game.gameLink}</h4>
          <p>{game.gameDescription}</p>
          <p className="gameDetailTags">{game.gameTags.join(' ')}</p>
          <p className="gameDetailTags">posted on {game.postTime}</p>
        </div>
        <div className="col-4 gameDetailPlayerList">
          <h5>{game.gamePlayers.length}/{game.gameMaxPlayers}</h5>
          <h1>Players</h1>
          <hr/>
          <ul className="gameDetailList">
            {game.gamePlayers.map((player, i) => {
              return <li key={i}>{player}</li>
            })}
          </ul>
          <br/>
          <p className="gameDetailTags">{maxPlayerMessage}</p>
          <button onClick={() => addPlayerToGame(props.currentUser)} className="btn btn-success" style={addPlayerStyle} disabled={maxPlayersReached}>Join this game!</button>
          <button onClick={() => removePlayerFromGame(props.currentUser)} className='btn btn-danger' style={removePlayerStyle}>Leave this game!</button>
        </div>
      </div>
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  currentUser: PropTypes.string,
  onChangingPlayers: PropTypes.func
}

export default GameDetail;