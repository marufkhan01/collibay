import React, {Component} from "react";
import { Nav, NavItem,Navbar,NavbarBrand, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import './navbar.css'

class TopNavbar extends Component{

  render(){

    return(
        <Navbar color="" light expand="md">
          <NavbarBrand tag={Link} to="/">
          <img src="../images/logo.png"  
            width="40"
            height="30"
            className="d-inline-block align-top"/>
          </NavbarBrand>
        
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/login">
            Sign In
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/register">
            Sign Up
          </NavLink>
        </NavItem>
      </Nav>
      </Navbar>
  
    )
  }
}
export default TopNavbar;