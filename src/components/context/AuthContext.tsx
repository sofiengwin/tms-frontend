import React, { createContext } from "react";
import AppService from "../../services/AppService";
import clientFactory from "../../lib/client";

const GRAPHQL_HOST = process.env.REACT_APP_GRAPHQL_HOST || ''

const client = clientFactory(GRAPHQL_HOST, () => localStorage.getItem('session') || '');

const appService = new AppService(client);

export const AuthContext = createContext({ appService });
// restore session if there is a valid token in local storage
if (localStorage.getItem('session')) {
  appService.restoreSession();
}

export const AuthProvider = ({ children }: any) => {
  return (
    <AuthContext.Provider value={{ appService }}>
      {children}
    </AuthContext.Provider>
  );
};
