import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PetsView from './components/UI/PetsView';
import Profile from './components/UI/Profile';
import Login from './components/UI/Login';
import Register from './components/UI/Register';
import PrivateRounter from './components/utils/PrivateRouter'



let dogData = {
  name: 'Mollys',
  age: '2 años',
  breed: 'Labrador',
  sex: 'Hembra',
  neutered: 'Si',
  vaxxed: 'Si',
  chipped: 'Si',
  allergies: 'No',
  diet: 'BARF',
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

let otherData = {
  otherInfo: 'Aca iria un text area read only con info que los dueños crean que es importante y no esta en los campos de las tablas',
}

const App = () => {

  
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRounter />}>
          <Route path='/profile' element={<Profile dogData={dogData} humanData={humanData} otherData={otherData} />} exact />
          <Route path='/pets' element={<PetsView dogData={dogData} humanData={humanData} otherData={otherData} />} exact />
        </Route>
        <Route path='/' element={<Login />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/register' element={<Register />} exact />
      </Routes>
    </Router>
  )
}

export default App;
