import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./components/styled/theme";
import Layout from "./components/ui/Layout";
import Home from "./components/Home";
import Report from "./components/Report";
import Profile from "./components/Profile/Profile";
import CollectPayment from './components/CollectPayment';

function App() {
  return (
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
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route exact path='/collect-payment'>
              <CollectPayment />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
