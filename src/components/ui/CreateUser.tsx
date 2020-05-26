import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  type: string;
  placeholder: string;
  button_text: string;
}

const CreateUserComponent: React.FC<Props> = ({
  type,
  placeholder,
  button_text,
}) => {
  return (
    <CardStyle>
      <IStyle size='3em' color='teal' className='fas fa-users'></IStyle>
      <H1Style>Create User</H1Style>
      <FormStyle>
        <FormGroupStyle>
          <Form.Label>{placeholder}</Form.Label>
          <InputStyle type={type} placeholder={placeholder} />
        </FormGroupStyle>
        <ButtonStyle variant='success' type='submit'>
          <IStyle
            size='1'
            color='white'
            className='fas fa-sign-in-alt'
          ></IStyle>{" "}
          {button_text}
        </ButtonStyle>
      </FormStyle>
    </CardStyle>
  );
};

export default CreateUserComponent;

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
