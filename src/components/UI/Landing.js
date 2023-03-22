import "./Landing.css"
import { Link } from "react-router-dom";


const Landing = () => {
    return (

        <div className="card">
            <p>BIENVENIDO A LA APP DNI DE TUS MASCOTAS</p>
            <Link to="/login" className="btn">Empezar!</Link>
        </div>


    )
}

export default Landing;