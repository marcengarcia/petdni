import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'

import Pets from './components/UI/Pets';
import Profile from './components/UI/Profile';
import Login from './components/UI/Login';
import Register from './components/UI/Register';
import Landing from './components/UI/Landing';


const App = () => {


  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' Component={Landing} exact/>
          <Route path='/login' Component={Login} exact/>
          <Route path='/register' Component={Register} exact/>
          <Route path='/profile' Component={Profile} exact/>
          <Route path='/pets' Component={Pets} exact/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
