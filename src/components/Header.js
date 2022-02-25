import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <React.Fragment>
      <h1>Looking For Group</h1>
      <h2>DND Session Coordinator</h2>
      <button className="btn btn-info"><Link to='/'>Games List</Link></button>
      <button className="btn btn-warning"><Link to='/account'>Account Details</Link></button>
    </React.Fragment>
  );
}

export default Header;