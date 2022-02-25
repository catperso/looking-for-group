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





  render(){
    return(
      <h1>Games Here</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

