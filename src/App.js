import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Pets from './components/UI/Pets';
import Profile from './components/UI/Profile';
import Login from './components/UI/Login';
import Register from './components/UI/Register';
import Landing from './components/UI/Landing';
import PrivateRounter from './components/utils/PrivateRouter'



const App = () => {
  let dogData = {
    name: 'Mollys',
    age: '2 años',
    race: 'Labrador',
    sex: 'Hembra',
    neutered: 'Si',
    vaxxed: 'Si',
    chipped: 'Si',
    allergies: 'No',
    other: 'No'
}

  return (
    <Router>
        <Routes>
          <Route element={<PrivateRounter/>}>
            <Route path='/profile' element={<Profile dogData={dogData}/>} exact />
            <Route path='/pets' element={<Pets dogData={dogData}/>} exact />
          </Route>
          <Route path='/' element={<Landing/>} exact />
          <Route path='/login' element={<Login/>} exact />
          <Route path='/register' element={<Register/>} exact />
        </Routes>
    </Router>
  )
}

export default App;
