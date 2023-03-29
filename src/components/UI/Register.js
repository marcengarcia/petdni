import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import bcrypt from 'bcryptjs'

const Register = () => {
    const navigate = useNavigate()

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const validatePassword = (password) => {
        const regex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/
        return regex.test(password)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          submitReg()
        }
      }

    const submitReg = () => {
        if (!validatePassword(password)) {
            alert('La contraseña debe tener al menos 8 caracteres y 1 caracter especial.')
            return
        }
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden.')
            return
        }

        Axios.get(`http://localhost:3001/api/checkEmail/${email}`).then((response) => {
            if (response.data.length > 0) {
                alert('El email ya existe.')
                return
            } else {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if (err) throw err;
                        Axios.post('http://localhost:3001/api/sign-up', {
                            firstname: firstname,
                            lastname: lastname,
                            email: email,
                            password: hash
                        }).then(navigate('/profile'))
                    })
                })
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='login-container'>
            <formon Submit={handleSubmit} className='login-wrapper'>
                <h1>Registarse</h1>
                <input type="text" placeholder='Nombre' onChange={(e) => { setFirstName(e.target.value) }} onKeyDown={handleKeyDown}/>
                <input type="text" placeholder='Apellido' onChange={(e) => { setLastName(e.target.value) }} onKeyDown={handleKeyDown}/>
                <input type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} onKeyDown={handleKeyDown}/>
                <input type="password" name="passwords" placeholder='Contraseña' onChange={(e) => { setPassword(e.target.value) }} onKeyDown={handleKeyDown}/>
                <input type="password" name="confirm" placeholder='Repetir contraseña' onChange={(e) => { setConfirmPassword(e.target.value) }} onKeyDown={handleKeyDown}/>
                <button className='reg-btn' onClick={submitReg}>Registrarse</button>
                <div className='bottom-text'>
                    <p>Ya tengo una cuenta, <Link to='/login'>ingresar</Link>.</p>
                </div>
            </formon>
        </div>
    )
}

export default Register;
