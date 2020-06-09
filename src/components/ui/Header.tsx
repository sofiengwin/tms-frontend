import * as React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  return (
    <NavStyle bg='light' expand='lg' sticky='top'>
      <Navbar.Brand>
        {location.pathname === "/" ? (
          <Label>BYSRCS</Label>
        ) : (
          <Label onClick={() => history.goBack()}>Back</Label>
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <StyleLink to='/'>Home</StyleLink>
          <StyleLink to='/register'>Add Driver</StyleLink>
          <StyleLink to='/report'>Reports</StyleLink>
          <StyleLink to='/defaulters'>Defaulter Report</StyleLink>
          <StyleLink to='/admin'>Payment Stats</StyleLink>
          <StyleLink to='/qr'>QR Codes</StyleLink>
        </Nav>
      </Navbar.Collapse>
    </NavStyle>
  );
};

export default Header;

const NavStyle = styled(Navbar)`
  padding: 0 5%;

  @media (max-width: 769px) {
    padding: 0 1em;
  }
`;

const StyleLink = styled(Link)`
  color: #888;
  text-decoration: none;
  padding: 1em;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 769px) {
    padding: 1em;
    border-bottom: 1px solid #dddddd;
  }
`;

const Label = styled.label`
  color: #888;
`;
