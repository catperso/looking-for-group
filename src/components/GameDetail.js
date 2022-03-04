import React from "react";
import PropTypes from 'prop-types';

function GameDetail(props){
  const { game, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Game Detail goes Here!</h1>
    </React.Fragment>
  );
}

GameDetail.propTypes = {
  game: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default GameDetail;