import "./Landing.css"
import DogPictures from '../Data/DogPictures';
import DogData from '../Data/DogData';
import HumanData from '../Data/HumanData';
import OtherData from '../Data/OtherData';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import Login from "./Login";
import { Link } from "react-router-dom";


const Landing = () => {
    return (

        <div className="card">
            <p>BIENVENIDO A LA APP DNI DE TUS MASCOTAS</p>
            <Link to="/register" className="btn">Empezar!</Link>
        </div>


    )
}

export default Landing;