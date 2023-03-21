import "./Pets.css"
import DogPictures from '../Data/DogPictures';
import DogData from '../Data/DogData';
import HumanData from '../Data/HumanData';
import OtherData from '../Data/OtherData';
import Footer from '../Data/Footer';
import Header from '../Data/Header';
import PetPicker from "../Data/PetPicker";



const Pets = (props) => {
    return (
        <div className="card">
            <div className="header"><Header /></div>
            
            <div className="slider-component" >
                <DogPictures />
                <div className='dog-name'>{props.name}</div>
            </div>
            <div className="content">
                <div className="dog-data"><DogData /></div>
                <div className="human-data"><HumanData /></div>
                <div className="other-data"><OtherData /></div>
            </div>
            <div className="pet-picker"><PetPicker/></div>
            <div className="footer"><Footer /></div>
        </div>
    )
}

export default Pets;