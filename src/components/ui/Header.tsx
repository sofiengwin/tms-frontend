import * as React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <NavStyle bg='light' expand='lg' sticky='top'>
      <Navbar.Brand href='#home'>TMS</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <StyleLink to='/report'>Reports</StyleLink>
          <StyleLink to='/defaulter'>Defaulter Report</StyleLink>
          <Label onClick={() => history.goBack()}>Back</Label>
        </Nav>
      </Navbar.Collapse>
    </NavStyle>
  );
};

export default Header;

const NavStyle = styled(Navbar)`
  z-index: 10;

  #basic-navbar-nav {
    background-color: whitesmoke !important;
    padding: 1em;
    width: 110%;
    margin: 0 !important;
  }
`;

const StyleLink = styled(Link)`
  color: #888;
  text-decoration: none;
  padding: 1em 0;
  border-bottom: 1px solid #dddddd;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.label`
  color: #888;
  padding: 1em 0;
`;
