import React from 'react';
import styled from 'styled-components';
import {Alert} from 'react-bootstrap';

interface Props {
  errors: string[];
  errorMessages: Dict<string>;
}

const AlertWarning: React.FC<Props> = ({errors, errorMessages}) => {
  return (
    <Warning>
      {errors.map((error) => {
        const message = (errorMessages as any)[error] || 'Something went wrong';

        return <>
        {message && <Alert key={error} variant="danger">
          {message}
        </Alert>}
        </>
      })}
    </Warning>
  )
}

export default AlertWarning

const Warning = styled.div`
  margin: 0 20px;
`;