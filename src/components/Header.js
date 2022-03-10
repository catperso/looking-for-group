import React from "react";
import { NavLink } from "react-router-dom";
import dungindragons from "./../img/dungin-dragons.png";

function Header(){
  return (
    <React.Fragment>
      <img src={dungindragons} alt='a logo' className="dunginLogo" />
      <h1>Looking For Group</h1>
      <h2>DND Session Coordinator</h2>
      <NavLink to='/' className="btn btn-info">Games List</NavLink>
      <NavLink to='/signin' className="btn btn-warning" activeClassName="disabled">Sign In/Up/Out</NavLink>
      <hr/>
    </React.Fragment>
  );
}

export default Header;