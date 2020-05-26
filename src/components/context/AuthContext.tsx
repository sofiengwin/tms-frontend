import React, { createContext } from "react";
import AppService from "../../services/AppService";
import clientFactory from "../../lib/client";

const client = clientFactory("", () => "fake.token");

const appService = new AppService(client);

export const AuthContext = createContext({ appService });

export const AuthProvider = ({ children }: any) => {
  return (
    <AuthContext.Provider value={{ appService }}>
      {children}
    </AuthContext.Provider>
  );
};
