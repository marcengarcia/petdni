import './Register.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from "axios"


const Register = () => {

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validatePassword = (password) => {
        const regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        return regex.test(password);
      }
      
    const submitReg = () => {

        if (!validatePassword(password)) {
            alert('La contraseña debe tener al menos 8 caracteres y 1 caracter especial.');
            return;
          }
          

        Axios.get(`http://localhost:3001/api/checkEmail/${email}`).then((response) => {
            if (response.data.length > 0) {
                alert('El email ya existe.')
            } else {
                Axios.post('http://localhost:3001/api/insert', {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password
                }).then(() => {
                    alert('Registro correcto')
                })
            }
        })
    }

    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <h1>Registarse</h1>
                <input type="text" placeholder='Nombre' onChange={(e) => { setFirstName(e.target.value) }} />
                <input type="text" placeholder='Apellido' onChange={(e) => { setLastName(e.target.value) }} />
                <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" placeholder='Contraseña' onChange={(e) => { setPassword(e.target.value) }} />
                <input type="password" placeholder='Repetir contraseña' />
                <button className='reg-btn' onClick={submitReg}>Registrarse</button>
                <p>Ya tengo una cuenta, <Link to='/login'>ingresar</Link>.</p>
            </div>
        </div>
    )
}

export default Register;
