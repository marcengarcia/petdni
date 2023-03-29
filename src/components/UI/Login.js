import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios'
import bcrypt, { hash } from 'bcryptjs'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
    }
      


    

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-wrapper'>
                <h1>Ingresar</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' onKeyDown={handleKeyDown} required />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Contraseña' onKeyDown={handleKeyDown} required />
                <button className='login-btn' type='submit'>Ingresar</button>
                <div className='bottom-text'>
                    <p>No tengo cuenta, <Link to='/register'>registrarme</Link>.</p>
                    <p><Link to=''>¿Olvidaste tu contraseña? </Link></p>
                </div>
            </form>
        </div>
    )
}


export default Login