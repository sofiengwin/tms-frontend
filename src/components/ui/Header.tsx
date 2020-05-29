import * as React from "react";
import styled from "styled-components";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
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

    // <Navbar bg='light' expand='lg'>
    //   <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //   <Navbar.Collapse id='basic-navbar-nav'>
    //     <Nav className='mr-auto'>
    //       <Nav.Link href='#home'>Home</Nav.Link>
    //       <Nav.Link href='#link'>Link</Nav.Link>
    //       <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
    //         <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
    //         <NavDropdown.Item href='#action/3.2'>
    //           Another action
    //         </NavDropdown.Item>
    //         <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
    //         <NavDropdown.Divider />
    //         <NavDropdown.Item href='#action/3.4'>
    //           Separated link
    //         </NavDropdown.Item>
    //       </NavDropdown>
    //     </Nav>
    //     <Form inline>
    //       <FormControl type='text' placeholder='Search' className='mr-sm-2' />
    //       <Button variant='outline-success'>Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default Header;

const NavStyle = styled(Navbar)``;

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
