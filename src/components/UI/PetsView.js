import "./PetsView.css"
import DogPictures from '../data/PetPictures';
import PetData from '../data/PetData';
import HumanData from '../data/HumanData';
import OtherData from '../data/OtherData';
import Footer from '../data/Footer';
import Header from '../data/Header';

const Pets = (props) => {

    return (
        <div className="card">
            <div className="header"><Header /></div>

            <div className="slider-component" >
                <DogPictures petData={props.petData} />
                <div className='dog-name'>{ }</div>
            </div>
            <div className="content">
                <div className="dog-data"><PetData petData={props.petData} /></div>
                <div className="human-data"><HumanData humanData={props.humanData} /></div>
                <div className="other-data"><OtherData otherInfo={props.otherInfo} /></div>
            </div>
            <div className="footer"><Footer /></div>
        </div>
    )
}

export default Pets;