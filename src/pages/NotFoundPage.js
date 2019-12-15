import React from 'react';
import {Nav, Navbar, NavItem} from "reactstrap";

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          404 Not Found <a href='/'>Go to home page</a>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
