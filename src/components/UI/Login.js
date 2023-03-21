import './Login.css';


const Login = () => {

    return (
        <div className='container'>
            <div className='login-box'>
                <h1>Ingresar</h1>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Contraseña' />
                <button className='login-btn' type='submit'>Ingresar</button>
                <p>No tengo cuenta, <a href="">registrarme</a>.</p>
            </div>
        </div>
    )
}

export default Login;
