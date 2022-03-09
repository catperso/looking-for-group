import React from "react";
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function GameDetail(props){
  const firestore = useFirestore();
  const { game, onClickingDelete } = props;

  // function addPlayerToGame() {
  //   const propertiesToUpdate = {
  //     gamePlayers: arrayUnion(props.currentUser)
  //   }
  //   return firestore.update({collection: 'games', doc: game.id }, propertiesToUpdate);
  // }

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
          <h1>Players</h1>
          <hr/>
          <ul className="gameDetailList">
            {game.gamePlayers.map((player, i) => {
              return <li key={i}>{player}</li>
            })}
          </ul>
          <button className="btn btn-success" disabled={props.currentUser === game.gameHost ? true : false}>Join this game!</button>
        </div>
      </div>
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  currentUser: PropTypes.string
}

export default GameDetail;