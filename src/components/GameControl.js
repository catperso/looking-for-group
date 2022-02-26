import React from 'react';
import NewGameForm from './NewGameForm';
import GameList from './GameList';
import GameDetail from './GameDetail';
import EditGameForm from './EditGameForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

class GameControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedGame: null,
      editing: false
    }
  }

  handleClick = () => {
    if (this.state.selectedGame != null) {
      this.setState({
        selectedGame: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewGame = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  render(){
    return(
      <h1>Games Here</h1>
    );
  }
}

GameControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

GameControl = connect(mapStateToProps)(GameControl);

export default withFirestore(GameControl);