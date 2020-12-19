import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/navBar/Navbar';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { effortTheme } from './themes';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={effortTheme}>
        <Fragment>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

export default App;
