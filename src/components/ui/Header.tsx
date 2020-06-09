import * as React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const [expanded, setExpanded] = React.useState(false)
  const history = useHistory();
  const location = useLocation();
  return (
    <NavStyle bg='light' expand='lg' sticky='top' onClick={() => setExpanded(true)} expanded={expanded}>
      <Navbar.Brand>
        {location.pathname === "/" ? (
          <Label>BYSRCS</Label>
        ) : (
          <Label onClick={() => history.goBack()}>Back</Label>
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto' onSelect={() => setExpanded(false)}>
          <StyleLink to='/' onClick={() => setExpanded(false)}>Home</StyleLink>
          <StyleLink to='/register' onClick={() => setExpanded(false)}>Add Driver</StyleLink>
          <StyleLink to='/report' onClick={() => setExpanded(false)}>Reports</StyleLink>
          <StyleLink to='/defaulters' onClick={() => setExpanded(false)}>Defaulter Report</StyleLink>
          <StyleLink to='/cashier' onClick={() => setExpanded(false)}>Cashier Profile</StyleLink>
          <StyleLink to='/qr' onClick={() => setExpanded(false)}>QR Codes</StyleLink>
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
