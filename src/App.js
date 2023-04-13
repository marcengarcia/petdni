import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import PetsView from './components/UI/PetsView'
import Profile from './components/UI/Profile'
import Login from './components/UI/Login'
import Register from './components/UI/Register'
import PrivateRounter from './components/utils/PrivateRouter'

const App = () => {
  const [pets, setPets] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/pets/user/1')
      .then((response) => response.json())
      .then((data) => {
        setPets(data)
      })
  }, [])

  const [petData, setPetData] = useState({
    name: '',
    age: '',
    breed: '',
    sex: '',
    neutered: '',
    vaxxed: '',
    chipped: '',
    allergies: '',
    diet: '',
    other: '',
    ownerId: ''
  })
  useEffect(() => {
    fetch('http://localhost:3001/pets/2')
      .then((response) => response.json())
      .then((data) => {
        setPetData(data)
        console.log(data)
      })
      .catch((error) => console.error(error))
  }, [])

  const [humanData, setHumanData] = useState({
    name: '',
    phone: '',
    instagram: '',
    twitter: '',
    facebook: '',
    other: ''
  })

  useEffect(() => {
    fetch('http://localhost:3001/users/marcengarcia@gmail.com')
      .then((response) => response.json())
      .then((data) => {
        setHumanData(data)
        console.log(data)
      })
      .catch((error) => console.error(error))
  }, [])

  const [otherInfo, setOtherInfo] = useState({
    other_info: '',
  })

  useEffect(() => {
    fetch('http://localhost:3001/other-info/2')
      .then((response) => response.json())
      .then((data) => {
        setOtherInfo(data)
        console.log(data)

      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRounter />}>
          <Route path='/profile' element={<Profile petData={petData} humanData={humanData} otherInfo={otherInfo} pets={pets} />} exact />
          <Route path='/pets' element={<PetsView petData={petData} humanData={humanData} otherInfo={otherInfo} />} exact />
        </Route>
        <Route path='/' element={<Login />} exact />
        <Route path='/login' element={<Login />} exact />
        <Route path='/register' element={<Register />} exact />
      </Routes>
    </Router>
  )
}

export default App
