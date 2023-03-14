import './DogPictures.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


const DogPictures = () => {
    return (
        <div className='carrousel'>
            <img src={require('../../images/molly1.jpg')} className='profile-pìctures' alt='Profile picture of the doggo'></img>
            <div className='dog-name'>Molly</div>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow-back" />
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-forward" />
        </div>
    )
}

export default DogPictures