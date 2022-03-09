import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className="form-control">
        <div className="row">
          <div className="col-6">
            <label>Game Name</label>
            <input 
              type="text"
              name='gameName'
              placeholder='Game Name'
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label>When will you host the session?</label>
            <input
              type='date'
              name="gameTime"
              className="form-control"
            />
          </div>
        </div>
          <label>Game Description</label>
          <textarea 
            name='gameDescription'
            placeholder='Describe your game'
            className="form-control"
          />
          <label>Game Tags</label>
          <textarea
            name='gameTags'
            placeholder='#put #tags #here #with #preceding #hash #separated #by #spaces'
            className="form-control"
          />
          <label>Game Location</label>
          <input
            type='text'
            name='gameLink'
            placeholder="Put a link to your discord server, roll20, or wherever the game will be hosted"
            className="form-control"
          />
          <br/>
          <button type='submit' className="btn btn-success">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;