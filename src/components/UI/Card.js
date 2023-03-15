import "./Card.css"
import DogPictures from '../Data/DogPictures';
import DogData from '../Data/DogData';
import HumanData from '../Data/HumanData';
import OtherData from '../Data/OtherData';
import Footer from '../Data/Footer';
import Header from '../Data/Header';

const Card = () => {



    return (
        <div className="card">
            <div className="header"><Header /></div>
            <div className="carrousel"><DogPictures /></div>
            <div className="content">
                <div className="dog-data"><DogData /></div>
                <div className="human-data"><HumanData /></div>
                <div className="other-data"><OtherData /></div>
            </div>
            <div className="footer"><Footer /></div>
        </div>
    )
}

export default Card;