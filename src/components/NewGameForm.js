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
        //game attributes go here
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addGameToFirestore}
      />
    </React.Fragment>
  );
}

NewGameForm.propTypes = {
  onNewGameCreation: PropTypes.func
}

export default NewGameForm;