import React from 'react';
import PropTypes from 'prop-types';

function Game(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenGameClicked(props.id)}>
        <h2>Game Name</h2>
        <h3>by - <em>Game Author</em></h3>
      </div>
    </React.Fragment>
  );
}

Game.propTypes = {
  whenGameClicked: PropTypes.func
}

export default Game;