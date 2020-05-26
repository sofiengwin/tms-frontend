import React from 'react';
import { Form } from "react-bootstrap";
import styled from 'styled-components';

interface Props {
  name: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  label: string;
}

const TextInput: React.FC<Props> = ({name, value, type, onChange, placeholder, error, label}) => {
  return (
    <FormGroupStyle controlId={name}>
      <Form.Label>{label}</Form.Label>
      <InputStyle
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      {error && <Form.Control.Feedback type='invalid'>
        {error}
      </Form.Control.Feedback>}
    </FormGroupStyle>
  )
}
export default TextInput;

const FormGroupStyle = styled(Form.Group)`
  padding: 1em 0;
`;

const InputStyle = styled(Form.Control)`
  padding: 1.5em 1em;
`;