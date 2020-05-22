import * as React from "react";
import {Navbar, Nav} from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar variant="light" bg="light" >
      <Nav className="mr-auto">
        <Nav.Link href="#home">Back</Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Forward</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
