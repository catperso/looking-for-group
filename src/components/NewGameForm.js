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
        gameHost: props.gameHost,
        gameDescription: event.target.gameDescription.value,
        gameTags: event.target.gameTags.value.split(' '),
        gameLink: event.target.gameLink.value,
        gameTime: event.target.gameTime.value,
        postTime: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addGameToFirestore}
        buttonText="Add your session!"
        gameNameValue=''
        gameTimeValue=''
        gameDescriptionValue=''
        gameTagsValue=''
        gameLinkValue=''
        />
    </React.Fragment>
  );
}

NewGameForm.propTypes = {
  onNewGameCreation: PropTypes.func,
  gameHost: PropTypes.string
}

export default NewGameForm;