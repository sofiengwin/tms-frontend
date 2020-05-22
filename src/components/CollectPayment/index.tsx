// @ts-nocheck
import * as React from 'react';
import QrReader from 'react-qr-scanner';
import SuccessModal from './Success';
import { Button } from 'react-bootstrap';
import Scanner from './Scanner';


const CollectPayment = () => {
  const [data, setData] = React.useState('')
  const [success, setSuccess] = React.useState(false)
  const [errorModal, setErrorModal] = React.useState(false)

  const handleError = (error) => {
    if (error) {
      setErrorModal(true);
    }
  }

  const onScan = (data) => {
    console.log({data});
    setData(data);
  }

  return (
    <>
      {data.length ? 
        (<div>
          <h4>Collect payment for MOT {data}</h4>
          <Button variant="primary">Record Payment</Button>
        </div>) :
        (
          <Scanner onError={handleError} onScan={onScan} />
        )
      }
    </>
  );
}

export default CollectPayment;