import React from "react";
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return (
    <React.Fragment>
      {/* form goes here
      Game Title
      Game Host = logged in user
      Game Description and Details
      Game Tags (things like #curseofstrahd or #icewinddale if using those modules, or anything the host wants) */}
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func
}

export default ReusableForm;