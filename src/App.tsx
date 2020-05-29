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
import { AuthProvider } from "./components/context/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <PrivateRoute exact path='/'>
                <Home />
              </PrivateRoute>
              <PrivateRoute exact path='/report'>
                <Report />
              </PrivateRoute>
              <PrivateRoute exact path='/defaulter'>
                <Defaulter />
              </PrivateRoute>
              <PrivateRoute exact path='/profile'>
                <Profile />
              </PrivateRoute>
              <Route exact path='/login'>
                <Login />
              </Route>
              <PrivateRoute exact path='/register'>
                <Register />
              </PrivateRoute>
              <PrivateRoute exact path='/collect-payment'>
                <CollectPayment />
              </PrivateRoute>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
