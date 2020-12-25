import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Today from './components/pages/Today';
import Noplanb from './components/pages/Noplanb';
import Upcoming from './components/pages/Upcoming';
import Register from './components/auth/Register';
import Navbar from './components/layout/navBar/Navbar';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { believeTheme } from './themes';
import AuthState from './context/auth/AuthState';

const App = () => {
  return (
    <AuthState>
      <Router>
        <ThemeProvider theme={believeTheme}>
          <Fragment>
            <GlobalStyle />
            <Navbar />
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/today' component={Today} />
              <Route exact path='/upcoming' component={Upcoming} />
              <Route exact path='/noplanb' component={Noplanb} />
            </Switch>
          </Fragment>
        </ThemeProvider>
      </Router>
    </AuthState>
  );
};

export default App;
