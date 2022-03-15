import React from "react";
import { NavLink } from "react-router-dom";
import dungindragons from "./../img/dungin-dragons.png";

function Header(){
  return (
    <React.Fragment>
      <div className="headerZone">
      <img src={dungindragons} alt='a logo' className="dunginLogo" />
      <h1>Looking For Group</h1>
      <h2>DND Session Coordinator</h2>
      <NavLink to='/games' className="btn btn-info" activeClassName="disabled">Games List</NavLink>
      <NavLink to='/signin' className="btn btn-warning" activeClassName="disabled">Sign In/Up/Out</NavLink>
      <hr/>
      </div>
    </React.Fragment>
  );
}

export default Header;