import React from 'react';
import PropTypes from 'prop-types';

function Game(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenGameClicked(props.id)}>
        <h2>{props.gameName}</h2>
        <h3>by - <em>{props.gameHost}</em></h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Game.propTypes = {
  whenGameClicked: PropTypes.func,
  gameName: PropTypes.string,
  gameHost: PropTypes.string
}

export default Game;