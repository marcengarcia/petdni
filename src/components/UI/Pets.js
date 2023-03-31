import "./Pets.css"
import DogPictures from '../Data/DogPictures';
import DogData from '../Data/DogData';
import HumanData from '../Data/HumanData';
import OtherData from '../Data/OtherData';
import Footer from '../Data/Footer';
import Header from '../Data/Header';

const Pets = (props) => {






    // const [dogData, setDogData] = useState(null);

    // useEffect(() => {
    //     fetch('/api/dogs/1').then((response) => response.json()).then((json) => {
    //         setDogData( json )
    //     })
    // }, []);

    return (
        <div className="card">
            <div className="header"><Header /></div>

            <div className="slider-component" >
                <DogPictures dogData={props.dogData} />
                <div className='dog-name'>{ }</div>
            </div>
            <div className="content">
                <div className="dog-data"><DogData dogData={props.dogData} /></div>
                <div className="human-data"><HumanData humanData={props.humanData} /></div>
                <div className="other-data"><OtherData otherData={props.otherData} /></div>
            </div>
            <div className="footer"><Footer /></div>
        </div>
    )
}

export default Pets;