// @ts-nocheck
import * as React from 'react';
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';

const Preview = styled.div`
  background: black;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 500px 1fr;
`;

const previewStyle = {
  height: 300,
  width: '100%',
}

const CollectPayment = () => {
  const [data, setData] = React.useState({})
  return (
    <Wrapper>
      <h1>Collect Payment</h1>
      <Preview>
        <QrReader
          onScan={(data: any) => setData(data)}
          onError={(err: any) => console.log({err})}
          style={previewStyle}
        />
      </Preview>
      <div>
        <h1>
          {JSON.stringify(data)}
        </h1>
      </div>
    </Wrapper>
  );
}

export default CollectPayment;