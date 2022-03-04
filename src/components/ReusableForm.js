import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler} className="form-control">
        <label>Game Name</label>
        <input 
          type="text"
          name='gameName'
          placeholder='Game Name'
          className="form-control"
        />
        <label>Game Description</label>
        <textarea 
          name='gameDescription'
          placeholder='Describe your game'
          className="form-control"
        />
        <button type='submit' className="btn btn-success">{props.buttonText}</button>
      </form>
      {/* form goes here
      Game Title
      Game Host = logged in user
      Game Description and Details
      Game Tags (things like #curseofstrahd or #icewinddale if using those modules, or anything the host wants) */}
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;