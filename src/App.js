import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Login from './components/auth/Login';
import Today from './components/pages/Today';
import Noplanb from './components/pages/Noplanb';
import Upcoming from './components/pages/Upcoming';
import Register from './components/auth/Register';
import Navbar from './components/layout/navBar/Navbar';
import PrivateRoute from './components/routing/PrivateRoute';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { believeTheme } from './themes';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import Alert from './components/layout/alert/Alert';

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <Router>
          <ThemeProvider theme={believeTheme}>
            <Fragment>
              <GlobalStyle />
              <Navbar />
              <Alert />
              <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <PrivateRoute exact path='/today' component={Today} />
                <PrivateRoute exact path='/upcoming' component={Upcoming} />
                <PrivateRoute exact path='/noplanb' component={Noplanb} />
              </Switch>
            </Fragment>
          </ThemeProvider>
        </Router>
      </AlertState>
    </AuthState>
  );
};

export default App;
