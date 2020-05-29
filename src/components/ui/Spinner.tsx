import React from 'react'
import { Spinner } from 'react-bootstrap'
import {Center} from './Center';

const CenterSpinner = () => {
  return (
    <Center>
      <Spinner animation="border" variant="primary" style={{width: '150px', height: '150px'}} />
    </Center>
  )
}

export default CenterSpinner;