import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {ThemeProvider} from 'styled-components';
import theme from './components/styled/theme';
import Layout from './components/ui/Layout';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' >
              <Home />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
