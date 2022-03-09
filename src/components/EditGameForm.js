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
      gameName: event.target.gameName.value || game.gameName,
      gameDescription: event.target.gameDescription.value || game.gameDescription,
      gameTags: event.target.gameTags.value.split(' ') || game.gameTags,
      gameTime: event.target.gameTime.value || game.gameTime,
      gameLink: event.target.gameLink.value || game.gameLink
    }
    return firestore.update({collection: 'games', doc: game.id }, propertiesToUpdate);
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditingGameInFirestore}
        buttonText="Submit changes"
        gameNameValue={game.gameName}
        gameTimeValue={game.gameTime}
        gameDescriptionValue={game.gameDescription}
        gameTagsValue={game.gameTags.join(' ')}
        gameLinkValue={game.gameLink}
        />
    </React.Fragment>
  );
}

EditGameForm.propTypes = {
  game: PropTypes.object,
  onEditGame: PropTypes.func
}

export default EditGameForm;