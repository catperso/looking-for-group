import React from "react";
import PropTypes from 'prop-types';

function GameDetail(props){
  const { game, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{game.gameName}</h1>
      <h2><em>Posted by: {game.gameHost} at {game.postTime}</em></h2>
      <p>{game.gameDescription}</p>
      <p>{game.gameTags}</p>
      <button onClick={ props.onClickingEdit } className="btn btn-info" style={{display: props.currentUser === game.gameHost ? 'block' : 'none' }}>Update Game</button>
      <button onClick={()=> onClickingDelete(game.id) } className="btn btn-danger" style={{display: props.currentUser === game.gameHost ? 'block' : 'none' }}>Delete Game</button>
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