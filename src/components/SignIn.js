import React from "react";
import firebase from 'firebase/compat/app';
import { withRouter } from 'react-router-dom';

function SignIn(props){

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
      props.history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      console.log("Successfully signed in!");
      props.history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      console.log("Successfully signed out!");
      props.history.push('/');
    }).catch(function(error) {
      console.log(error.message);
    });
  }



  return(
    <React.Fragment>
      <div className="row">
        <div className="col-6">
        <h1>Sign up</h1>
        <form onSubmit={doSignUp} className="form-control">
          <input
            type='text'
            name='email'
            placeholder='email'
            className="form-control" />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className="form-control" />
          <button type='submit' className="btn btn-success">Sign up</button>
        </form>
        </div>
        <div className="col-6">
        <h1>Sign In</h1>
        <form onSubmit={doSignIn} className="form-control">
          <input
            type='text'
            name='signinEmail'
            placeholder='email'
            className="form-control" />
          <input
            type='password'
            name='signinPassword'
            placeholder='Password'
            className="form-control" />
          <button type='submit' className="btn btn-success">Sign in</button>
        </form>
        </div>
      </div>
      <button onClick={doSignOut} className="btn btn-danger">Sign out</button>
    </React.Fragment>
  );
}

export default withRouter(SignIn);