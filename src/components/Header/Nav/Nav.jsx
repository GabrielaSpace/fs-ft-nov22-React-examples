import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import { userContext } from '../../../context/userContext'; //contexto

class Nav extends Component {
  render() {
    return <nav>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
      <Link to="/infolist">Info List</Link>
      <Link to="/staff" >Staff</Link>
      <Link to="/donations" >Donations</Link>
      <Link to="/topic" >Topic</Link>

      <userContext.Consumer>
        {({ logout, user }) => user ?
          <span>Hola, {user} <Button variant="contained" size="small" onClick={logout}>Logout</Button></span>
          : ""
        }
      </userContext.Consumer>
    </nav>;
  }
}

export default Nav;
