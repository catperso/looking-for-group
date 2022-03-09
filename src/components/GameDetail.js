import React from "react";
import PropTypes from 'prop-types';

function GameDetail(props){
  const { game, onClickingDelete } = props;

  return (
    <React.Fragment>
      <button onClick={ props.onClickingEdit } className="btn btn-info" style={{display: props.currentUser === game.gameHost ? 'inline' : 'none' }}>Update Game</button>
      <button onClick={()=> onClickingDelete(game.id) } className="btn btn-danger" style={{display: props.currentUser === game.gameHost ? 'inline' : 'none' }}>Delete Game</button>
      <h1 className="gameDetailTitle">{game.gameName}</h1>
      <h4>Dungeon Master: <em>{game.gameHost}</em></h4>
      <h4>Session Date: {game.gameTime}</h4>
      <h4>This session is taking place at: {game.gameLink}</h4>
      <p>{game.gameDescription}</p>
      <p className="gameDetailTags">{game.gameTags}</p>
      <p className="gameDetailTags">posted on {game.postTime}</p>
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