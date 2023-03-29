import './Login.css';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit()
        }
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

export default Login;