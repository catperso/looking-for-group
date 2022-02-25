import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditGameForm(props) {
  const firestore = useFirestore();
  const { game } = props;

  function handleEditingGameInFirestore(event) {
    event.preventDefault();
    props.onEditGame();
    const propertiesToUpdate = {
      // game attributes go here
    }
    return firestore.update({collection: 'games', doc: game.id }, propertiesToUpdate);
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditingGameInFirestore}
      />
    </React.Fragment>
  );
}

EditGameForm.propTypes = {
  game: PropTypes.object,
  onEditGame: PropTypes.func
}

export default EditGameForm;