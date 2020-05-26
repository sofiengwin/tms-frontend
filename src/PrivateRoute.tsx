import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {AuthContext} from './components/context/AuthContext';

const PrivateRoute = ({children, ...rest}: any) => {
  const {appService} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({location}) => 
        appService.isLogedin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute;