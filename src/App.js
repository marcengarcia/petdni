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
let humanData = {
  name: 'Marcelus',
  phone: '+54 123456789',
  instagram: '@marcengarcia',
  twitter: '@marcengarcia',
  Facebook: '@marcengarcia',
  other: ''
}
  return (
    <Router>
        <Routes>
          <Route element={<PrivateRounter/>}>
            <Route path='/profile' element={<Profile dogData={dogData} humanData={humanData}/>} exact />
            <Route path='/pets' element={<Pets dogData={dogData} humanData={humanData}/>} exact />
          </Route>
          <Route path='/' element={<Landing/>} exact />
          <Route path='/login' element={<Login/>} exact />
          <Route path='/register' element={<Register/>} exact />
        </Routes>
    </Router>
  )
}

export default App;
