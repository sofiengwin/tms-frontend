import React, { useState, useContext } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TextInput from "../ui/TextInput";
import { observer } from "mobx-react";

const errorMessages = {
  invalid_emailOrPassword: "Problem logging in! Check your Email and Password",
};
interface ILogin {
  email: string;
  password: string;
}

interface IForm {
  target: {
    name: string;
    value: string;
  };
}

const Login = () => {
  const { appService } = useContext(AuthContext);
  const history = useHistory();
  const [user, setUser] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleInput = ({ target: { name, value } }: IForm) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();

    await appService.login({ email: user.email, password: user.password });

    if (appService.isLogedin) {
      history.push("/");
    }
  };

  return (
    <CardStyle>
      <IStyle size='3em' color='teal' className='fas fa-sign-in-alt'></IStyle>
      <H1Style>Login Here</H1Style>
      <Warning>
        {appService.errors.map((error) => {
          const message = (errorMessages as any)[error];

          return (
            <>
              {message && (
                <Alert key={error} variant='danger'>
                  {message}
                </Alert>
              )}
            </>
          );
        })}
      </Warning>
      <FormStyle>
        <TextInput
          key={1}
          label='Email address'
          type='email'
          value={user.email}
          placeholder='Email Address'
          name='email'
          onChange={handleInput}
          error={undefined}
        />

        <TextInput
          key={2}
          label='Password'
          type='password'
          value={user.password}
          placeholder='Password'
          name='password'
          onChange={handleInput}
          error={undefined}
        />

        <ButtonStyle
          variant='success'
          type='submit'
          onClick={loginUser}
          loading={appService.isLoading}
          disabled={appService.isLoading}
        >
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

export default observer(Login);

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

const Warning = styled.div`
  margin: 0 20px;
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
