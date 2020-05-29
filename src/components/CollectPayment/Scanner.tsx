// @ts-nocheck
import React from 'react';
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';
import ErrorModal from './Error';
import { useHistory } from 'react-router-dom';

const Preview = styled.div`
  background: black;
  height: 80%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  text-align: center;
  height: 100%;
  grid-template-rows: 1fr 5fr 1fr;
`;

const previewStyle = {
  height: 500,
  width: '100%',
  objectFit: 'fill',
}

interface Props {
  onScan: (data: any) => void;
}

const Scanner: React.FC<Props> = ({onScan}) => {
  const [errors, setErrors] = React.useState<string[]>([])

  const history = useHistory();

  const handleError = (error: any) => {
    if (error) {
      setErrors(['Something is wrong with the scanner. Try again later or contact X'])
    }
  }

  return (
    <>
      <ErrorModal
        show={errors.length > 0}
        errorMessages={errors}
        onClose={() => {
          setShowError(false);
          history.push('/');
        }}
      />
      <Wrapper>
        <h1>Scan Code</h1>
        <Preview>
          <QrReader
            onScan={onScan}
            onError={handleError}
            style={previewStyle}
            delay={1000}
            onLoad={() => console.log('loaded')}
          />
        </Preview>
        <div>
          <h4>Make sure you are focusing on the entire QR code.</h4>
        </div>
      </Wrapper>
    </>
  );
}

export default Scanner;