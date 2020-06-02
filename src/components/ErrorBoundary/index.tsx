import React, { useState, useContext, useEffect } from "react";
import {Center} from '../ui/Center';
import { Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
interface Props {
  children?: any;
}

const MyErrorBoundary: React.FC<Props> = ({children}) => {
  const [appError, setAppError] = useState<AppErrorType>(null);
  const {appService} = useContext(AuthContext);

  useEffect(() => {
    appService.addErrorHandler(setAppError);
  }, [])
  
  console.log(appError, 'ErrorBoundary')
  if (appError === 'Unauthorized') {
    return <Redirect to="/login" />;
  } else if (appError === 'INTERNAL_SERVER_ERROR') {
    return <Center>Internal server appError. Bibi fucked up, call him now</Center>
  }

  
  return (
    children
  );
}

export default MyErrorBoundary