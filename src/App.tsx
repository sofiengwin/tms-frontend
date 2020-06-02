import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme";
import Layout from "./components/ui/Layout";
import Home from "./components/Home";
import Report from "./components/Report";
import Defaulter from "./components/DefaulterReport";
import Profile from "./components/Profile";
import CollectPayment from "./components/CollectPayment";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthProvider } from "./components/context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import QrImages from "./components/QrImages";
import PageNotFound from "./PageNotFound";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <PrivateRoute exact path='/'>
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              </PrivateRoute>
              <PrivateRoute exact path='/report'>
                <ErrorBoundary>
                  <Report />
                </ErrorBoundary>
              </PrivateRoute>
              <PrivateRoute exact path='/defaulters'>
                <ErrorBoundary>
                  <Defaulter />
                </ErrorBoundary>
              </PrivateRoute>
              <PrivateRoute exact path='/qr'>
                <ErrorBoundary>
                  <QrImages />
                </ErrorBoundary>
              </PrivateRoute>
              <PrivateRoute exact path='/drivers/:driverId'>
                <ErrorBoundary>
                  <Profile />
                </ErrorBoundary>
              </PrivateRoute>
              <Route exact path='/login'>
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              </Route>
              <PrivateRoute exact path='/register'>
                <ErrorBoundary>
                  <Register />
                </ErrorBoundary>
              </PrivateRoute>
              <PrivateRoute exact path='/collect-payment'>
                <ErrorBoundary>
                  <CollectPayment />
                </ErrorBoundary>
              </PrivateRoute>
              <Route path='*'>
                <PageNotFound />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
