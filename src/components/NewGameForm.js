import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
import { useFirestore } from "react-redux-firebase";

function NewGameForm(props){
  const firestore = useFirestore();

  function addGameToFirestore(event) {
    event.preventDefault();
    props.onNewGameCreation();
    return firestore.collection('games').add(
      {
        gameName: event.target.gameName.value,
        gameHost: "stinky DM",
        gameDescription: event.target.gameDescription.value,
        postTime: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addGameToFirestore}
        buttonText="Add your session!"/>
    </React.Fragment>
  );
}

NewGameForm.propTypes = {
  onNewGameCreation: PropTypes.func
}

export default NewGameForm;