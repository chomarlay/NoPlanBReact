import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import About from './components/pages/About';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
