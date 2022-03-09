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

  handleChangingSelectedGame = (id) => {
    this.props.firestore.get({collection: 'games', doc: id}).then((game) => {
      const firestoreGame = {
        gameName: game.get("gameName"),
        gameHost: game.get("gameHost"),
        gameDescription: game.get("gameDescription"),
        gameTags: game.get("gameTags"),
        gameLink: game.get("gameLink"),
        gameTime: game.get("gameTime"),
        gamePlayers: game.get("gamePlayers"),
        gameMaxPlayers: game.get("gameMaxPlayers"),
        postTime: game.get("postTime").toDate().toDateString(),
        id: game.id
      }
      this.setState({selectedGame: firestoreGame});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingGame = () => {
    this.setState({
      editing: false
    });
  }

  handleDeletingGame = (id) => {
    this.props.firestore.delete({collection: 'games', doc: id});
    this.setState({selectedGame: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonDisabled = true;
    let buttonClass = null;
    let disabledText = "You must be signed in to add a game";
    const auth = this.props.firebase.auth();
    let gameDetailCurrentUser = null;

    if (auth.currentUser) gameDetailCurrentUser = auth.currentUser.email;

    if (!isLoaded(auth)) {
      return(
        <React.Fragment>
          <h1>Loading games, please wait</h1>
        </React.Fragment>
      );
    } else {
      if ((auth.currentUser != null) || (this.state.selectedGame != null)) {
        buttonDisabled = false;
        disabledText = null;
      }
      if (this.state.editing) {
        currentlyVisibleState = <EditGameForm game={this.state.selectedGame} onEditGame={this.handleEditingGame} />;
        buttonText = "Return to All Games";
        buttonClass = "btn btn-warning";
      } else if (this.state.selectedGame != null) {
        currentlyVisibleState = <GameDetail game={this.state.selectedGame}
                                            onClickingDelete={this.handleDeletingGame}
                                            onClickingEdit={this.handleEditClick}
                                            currentUser={gameDetailCurrentUser} />;
        buttonText = "Return to All Games";
        buttonClass = "btn btn-warning";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewGameForm onNewGameCreation={this.handleAddingNewGame} gameHost={auth.currentUser.email}/>;
        buttonText = "Return to All Games";
        buttonClass = "btn btn-warning";
      } else {
        currentlyVisibleState = <GameList onGameSelection={this.handleChangingSelectedGame} />;
        buttonText = "Host a new game!"
        buttonClass = "btn btn-success";
      }
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <p><em>{disabledText}</em></p>
        <button onClick={this.handleClick} className={buttonClass} disabled={buttonDisabled}>{buttonText}</button>
      </React.Fragment>
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