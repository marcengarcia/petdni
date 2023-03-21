import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {

    return (
        <div className='container'>
            <div className='login-box'>
                <h1>Registarse</h1>
                <input type="text" placeholder='Nombre' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Contraseña' />
                <input type="password" placeholder='Repetir contraseña' />
                <button className='login-btn' type='submit'>Registrarse</button>
                <p>Ya tengo una cuenta, <Link to='/login'>ingresar</Link>.</p>
            </div>
        </div>
    )
}

export default Login;
