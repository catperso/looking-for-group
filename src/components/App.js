import React from "react";
import Header from "./Header";
import GameControl from "./GameControl";
import Account from "./Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/">
          <GameControl />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;