import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/">
          <GameControl />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;