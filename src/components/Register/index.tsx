import React, { useState, FormEvent } from "react";
import { Form, Button, Card } from "react-bootstrap";
import styled from "styled-components";

const Register = () => {
  const [error, setError] = useState<boolean>(false);
  //   const error: boolean = false;

  const registerUser = (e: FormEvent) => {
    e.preventDefault();
    setError(true);
  };
  return (
    <CardStyle>
      <IStyle size='3em' color='teal' className='fas fa-users'></IStyle>
      <H1Style>Create User</H1Style>
      <FormStyle submit={registerUser}>
        <FormGroupStyle>
          <Form.Label>Name</Form.Label>
          <InputStyle type='text' placeholder='Name' />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </FormGroupStyle>
        <FormGroupStyle>
          <Form.Label>Phone</Form.Label>
          <InputStyle type='text' placeholder='Phone' />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </FormGroupStyle>
        <FormGroupStyle>
          <Form.Label>Address</Form.Label>
          <InputStyle type='text' placeholder='Address' />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </FormGroupStyle>
        <FormGroupStyle>
          <Form.Label>MOT Number</Form.Label>
          <InputStyle type='text' placeholder='MOT Number' />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </FormGroupStyle>
        <FormGroupStyle>
          <Form.Label>State</Form.Label>
          <InputStyle type='text' placeholder='State' />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </FormGroupStyle>
        <FormGroupStyle>
          <Form.Label>Home Town</Form.Label>
          <InputStyle type='text' placeholder='Home Town' />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </FormGroupStyle>

        <FormGroupStyle controlId='formBasicPassword'>
          <Form.Label>Area Of Operation</Form.Label>
          <InputStyle type='password' placeholder='Area Of Operation' />
        </FormGroupStyle>
        <ButtonStyle variant='success' type='submit'>
          <IStyle
            size='1'
            color='white'
            className='fas fa-sign-in-alt'
          ></IStyle>{" "}
          Register
        </ButtonStyle>
      </FormStyle>
    </CardStyle>
  );
};

export default Register;

const FormStyle = styled(Form)`
  width: 90%;
  margin: auto;
`;
const CardStyle = styled(Card)`
  width: 40%;
  padding: 2em 0;

  @media (max-width: 769px) {
    width: 100%;
  }
`;
const FormGroupStyle = styled(Form.Group)`
  padding: 1em 0;
`;
const InputStyle = styled(Form.Control)`
  padding: 1.5em 1em;
`;
const H1Style = styled.h1`
  text-align: center;
  padding: 0.2em 0;
  color: #333;
`;
const ButtonStyle = styled(Button)`
  display: block;
  margin: auto;
`;
const IStyle = styled.i<{ size: string; color: string }>`
  text-align: center;
  padding: 0.1em 0;
  font-size: ${({ size }) => size && size};
  color: ${({ color }) => color && color};
`;
