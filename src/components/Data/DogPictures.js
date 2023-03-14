import './DogPictures.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


const slides = [
    '../images/molly1.jpg',
    '../images/molly2.jpg',
    '../images/molly3.jpg',
]




const DogPictures = () => {
    return (
        <div className='carrousel'>
            {/* <img src={require('../images/molly1.jpg')} className='profile-pictures' alt='Profile pictures for the dog' /> */}

            <ImageSlider slides={slides}/>
            <div className='dog-name'>Molly</div>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow-back" />
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-forward" />
        </div>
    )
}

export default DogPictures