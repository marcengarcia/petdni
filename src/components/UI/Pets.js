import "./Pets.css"
import DogPictures from '../Data/DogPictures';
import DogData from '../Data/DogData';
import HumanData from '../Data/HumanData';
import OtherData from '../Data/OtherData';
import Footer from '../Data/Footer';
import Header from '../Data/Header';

const Pets = (props) => {


    let humanData = {
        name: 'Marcelus',
        phone: '+54 123456789',
        instagram: '@marcengarcia',
        twitter: '@marcengarcia',
        Facebook: '@marcengarcia',
        other: ''
    }

    let otherData = {
        otherInfo: 'Aca iria un text area read only con info que los dueños crean que es importante y no esta en los campos de las tablas',
    }

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
                <div className="human-data"><HumanData humanData={humanData} /></div>
                <div className="other-data"><OtherData otherData={otherData} /></div>
            </div>
            <div className="footer"><Footer /></div>
        </div>
    )
}

export default Pets;