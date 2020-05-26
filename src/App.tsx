import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme";
import Layout from "./components/ui/Layout";
import Home from "./components/Home";
import Report from "./components/Report";
import Defaulter from "./components/DefaulterReport";
import Profile from "./components/Profile/Profile";
import CollectPayment from "./components/CollectPayment";
import Login from "./components/Login";
import Register from "./components/Register";
import AppService from "./services/AppService";
import clientFactory from "./lib/client";
import { AuthProvider } from "./components/context/AuthContext";

const client = clientFactory("", () => "fake.token");

const appService = new AppService(client);

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/report'>
                <Report />
              </Route>
              <Route exact path='/defaulter'>
                <Defaulter />
              </Route>
              <Route exact path='/profile'>
                <Profile />
              </Route>
              <Route exact path='/login'>
                <Login />
              </Route>
              <Route exact path='/register'>
                <Register />
              </Route>
              <Route exact path='/collect-payment'>
                <CollectPayment />
              </Route>
            </Switch>
          </Router>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
