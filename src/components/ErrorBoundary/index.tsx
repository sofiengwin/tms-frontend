import React from "react";
import {Center} from '../ui/Center';
import { Redirect, Link, useHistory } from "react-router-dom";
interface Props {
  error: AppErrorType;
  children?: any;
}

const MyErrorBoundary: React.FC<Props> = ({error, children}) => {
  const history = useHistory()
  console.log(error, 'ErrorBoundary')
  if (error === 'Unauthorized') {
    return <Center>Internal server error. Bibi fucked up, call him now <button onClick={() => history.push('/login')}>Login</button></Center>
  } else if (error === 'INTERNAL_SERVER_ERROR') {
    return <Redirect to="/login" />;
  }

  
  return (
    children
  );
}

export default MyErrorBoundary