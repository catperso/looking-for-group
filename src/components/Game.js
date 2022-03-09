import React from 'react';
import PropTypes from 'prop-types';

function Game(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenGameClicked(props.id)}>
        <h2>{props.gameName}</h2>
        <h3>DM - <em>{props.gameHost}</em></h3>
        <p>{props.gamePlayers.length}/{props.gameMaxPlayers} players</p>
        <p className='gameDetailTags'>{props.gameTags.join(' ') || "no tags here"}</p>
        <p className='gameDetailTags'>Game scheduled for: {props.gameTime}</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Game.propTypes = {
  whenGameClicked: PropTypes.func,
  gameName: PropTypes.string,
  gameHost: PropTypes.string,
  gameTime: PropTypes.string
}

export default Game;