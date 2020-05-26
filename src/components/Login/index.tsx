import React, { useState, FormEvent, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const loginDetails = [
  { type: "email", placeholder: "Email Address" },
  { type: "password", placeholder: "Password" },
];

interface loginInterface {
  email: string;
  password: string;
}

const Login = () => {
  const context = useContext(AuthContext);
  const login = context.appService.login;
  const isLogedin = context.appService.isLogedin;
  const history = useHistory();
  const [user, setUser] = useState<loginInterface>({
    email: "",
    password: "",
  });
  //   console.log(log);
  const [error, setError] = useState<boolean>(false);
  console.log(isLogedin);

  const handleInput = ({ target: { name, value } }: any) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = (e: any) => {
    e.preventDefault();
    login({ email: user.email, password: user.password });
    if (isLogedin) {
      history.push("/");
    }
    setError(true);
  };
  return (
    <CardStyle>
      <IStyle size='3em' color='teal' className='fas fa-sign-in-alt'></IStyle>
      <H1Style>Login Here</H1Style>
      <FormStyle>
        <FormGroupStyle controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <InputStyle
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={handleInput}
          />
          <Form.Control.Feedback type='invalid'>
            Please provide a valid state.
          </Form.Control.Feedback>
        </FormGroupStyle>

        <FormGroupStyle controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <InputStyle
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInput}
          />
        </FormGroupStyle>
        <ButtonStyle variant='success' type='submit' onClick={loginUser}>
          <IStyle
            size='1'
            color='white'
            className='fas fa-sign-in-alt'
          ></IStyle>{" "}
          Login
        </ButtonStyle>
      </FormStyle>
    </CardStyle>
  );
};

export default Login;

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
