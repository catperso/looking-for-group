import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/games">
          <GameControl />
        </Route>
        <Redirect from="/" to="/games" />
      </Switch>
    </Router>
  );
}


export default App;