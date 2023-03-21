import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom'

import Card from './components/UI/Card';
import Login from './components/UI/Login';
import Register from './components/UI/Register';


const App = () => {


  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path='/' Component={Card} exact/>
          <Route path='/login' Component={Login} exact/>
          <Route path='/Register' Component={Register} exact/>
        </Switch>

      </div>
    </Router>
  )
}

export default App;
