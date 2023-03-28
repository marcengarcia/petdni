import './Login.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-wrapper'>
                <h1>Ingresar</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="text" placeholder='Contraseña' />
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
