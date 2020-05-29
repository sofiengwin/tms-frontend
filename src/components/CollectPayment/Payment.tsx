import React, { useContext } from 'react';
import styled from 'styled-components';
import {Button} from 'react-bootstrap'
import { observer } from 'mobx-react';
import { AuthContext } from '../context/AuthContext';
import Success from './Success';
import { useHistory } from 'react-router-dom';
import ErrorModal from './Error';

interface Props {
  data: string;
  scanAnother: () => void;
}

const Payment: React.FC<Props> = ({data, scanAnother}) => {
  const {appService} = useContext(AuthContext);
  const [success, setSuccess] = React.useState(false)
  const [errors, setErrors] = React.useState<string[]>([])

  const history = useHistory()

  const [driverId, motNumber] = data.split('::');

  const recordPayment = async () => {
    console.log({appService})
    const payment = await appService.recordPayment({amount: 250, driverId: Number(32444344333434), cashierId: 1}, setErrors);
    console.log({driverId, motNumber, data})
    if (payment) {
      setSuccess(true);
    }
  }

  return (
    <>
      <Success
        show={success}
        motNumber={motNumber}
        scanAnother={scanAnother}
        backHome={() => history.push('/')}
        onHide={() => {
          setSuccess(false);
          history.push('/');
        }}
      />
      <ErrorModal
        show={errors.length > 0}
        errorMessages={errors}
        onClose={() => {
          setErrors([]);
          history.push('/');
        }}
      />
      <Center>
        <h4>Collect payment for MOT {data}</h4>
        <Button
          variant="primary"
          onClick={recordPayment}
          disabled={appService.isLoading}
        >
          { appService.isLoading ? 'Loading' : 'Record Payment'}
        </Button>
      </Center>
    </>
  )
}

export default observer(Payment);

const Center = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;