import "./Landing.css"
import { Link } from "react-router-dom";


const Landing = () => {
    return (

        <div className="landing-page">
            <div className="landing-page-wrapper">
            <p>PetDNI</p>
            <p>BIENVENIDO AL DNI DE TUS MASCOTAS</p>
            <Link to="/login" className="btn">Empezar!</Link>
            </div>
        </div>


    )
}

export default Landing;