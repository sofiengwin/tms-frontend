import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import styled from "styled-components";
import TextInput from '../ui/TextInput';
import {ICreateDriver} from '../../data/models/Driver';
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import Warning from '../ui/AlertWarning';
import Toast from '../ui/Toast';
import {Center} from '../ui/Center';

const cantBeBlank = (fiieldName: string) => `${fiieldName} can't be blank`

const errorMessages = {
  blank_name: cantBeBlank('Name'),
  "blank_phone_number": cantBeBlank('Phone Number'),
  "blank_mot_number": cantBeBlank('MOT Number'),
  "blank_address": cantBeBlank('Address'),
  "blank_area_of_operation": cantBeBlank('Area Of Operation'),
  "blank_hometown": cantBeBlank('Hometown'),
  "blank_state": cantBeBlank('State')
}

const Register = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [driver, setDriver] = useState<ICreateDriver>({
    name: '',
    phoneNumber: '',
    motNumber: '',
    address: '',
    state: '',
    hometown: '',
    areaOfOperation: ''
  })
  const [success, setSuccess] = useState<boolean>(false)

  const handleInput = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
    setDriver({
      ...driver,
      [name]: value,
    })
  };

  const {appService} = useContext(AuthContext);
  const history = useHistory()

  const createDriver = async (e: any) => {
    e.preventDefault();
    const createdDriver = await appService.createDriver(driver, setErrors)

    if (createdDriver) {
      setSuccess(true)
    }
  };

  const onSuccess = () => {
    setSuccess(false);
    history.push('/')
  }

  return (
    <>
      <Toast
        show={success}
        onClose={onSuccess}
        variant="success"
        title="Bootstrap"
        message="New Driver added!"
      />
      <Center>
        <CardStyle>
          <IStyle size='3em' color='teal' className='fas fa-users'></IStyle>
          <H1Style>Create Driver</H1Style>
          <Warning errors={errors} errorMessages={errorMessages}/>
          <FormStyle onSubmit={createDriver}>
            <TextInput
              name='name'
              type='text'
              placeholder='Name'
              value={driver.name}
              onChange={handleInput}
              label='Full Name'
            />
            <TextInput
              name='phoneNumber'
              type='text'
              placeholder='Phone Number'
              value={driver.phoneNumber}
              onChange={handleInput}
              label='Phone Number'
            />

            <TextInput
              name='motNumber'
              type='text'
              placeholder='MOT Number'
              value={driver.motNumber}
              onChange={handleInput}
              label='MOT Number'
            />

            <TextInput
              name='address'
              type='text'
              placeholder='Residential Address'
              value={driver.address}
              onChange={handleInput}
              label='Residential Address'
            />
            <TextInput
              name='state'
              type='text'
              placeholder='State Of Origin'
              value={driver.state}
              onChange={handleInput}
              label='State Of Origin'
            />

            <TextInput
              name='hometown'
              type='text'
              placeholder='Hometown'
              value={driver.hometown}
              onChange={handleInput}
              label='Hometown'
            />

            <TextInput
              name='areaOfOperation'
              type='text'
              placeholder='Area Of Operation'
              value={driver.areaOfOperation}
              onChange={handleInput}
              label='Area Of Operation'
            />

            <ButtonStyle variant='success' type='submit'>
              <IStyle
                size='1'
                color='white'
                className='fas fa-sign-in-alt'
              ></IStyle>{" "}
              Save
            </ButtonStyle>
          </FormStyle>
        </CardStyle>
      </Center>
    </>
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
